'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAuthor } from '@/sanity/api/getAuthor';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { LayoutGroup, motion, AnimatePresence  } from 'framer-motion';
import Burger from './Burger';
import { useToggle } from 'react-use';
import {
  navLinkVariant,
  navLinkArrowVariant,
  mobileMenu,
  mobileMenuItems,
  mobileAside,
  mobileMenuContainer,
} from '../utils/animations';
import author from '@/sanity/schemas/documents/author-schema';

const NavLink = ({ children, href = '', label = 'Label' }) => {
  return (
    <LayoutGroup>
      <motion.li
        layout
        variants={navLinkVariant}
        initial={false}
        whileHover="hover"
        animate="rest"
        className="rounded-md overflow-hidden"
      >
        <Link
          href={href ?? '/'}
          target="_blank"
          className="group flex justify-evenly items-center py-2"
        >
          {children}
          <div className="flex items-center gap-4">
            <span className="text-xl">{label}</span>
            <motion.span variants={navLinkArrowVariant}>
              <svg className="w-4 h-4" viewBox="0 0 13 13" fill="currentColor">
                <path d="M8.04998 6.36001L2.39398 12.018L0.97998 10.603L6.63698 4.94701L1.68698 -0.00299072H13V11.31L8.04998 6.36001Z" />
              </svg>
            </motion.span>
          </div>
        </Link>
      </motion.li>
    </LayoutGroup>
  );
};

const DesktopNavPanel = ({author}) => {
  return (
    <nav className="bg-slate-800 z-10 hidden md:basis-[220px] lg:basis-[300px] md:flex flex-col items-center pt-8 px-4 lg:px-6">
      <div id="name-group" className="flex flex-col items-center w-full whitespace-nowrap">
        <div className="relative h-[160px] w-[160px] hexagon bg-slate-600">
        <AnimatePresence>
    {author? (
      <motion.div
      className="relative h-[100%] w-[100%] hexagon"
        key="profile-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
          <Image  src={urlForImage(author.image?.url).width(1920).url()}//"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt="Portrait of Janna Curtis" className="" fill={true} />
          </motion.div>
              ):null}
  </AnimatePresence>
        </div>
        <h1 className="mt-3 text-3xl ">Janna Curtis</h1>
     
        <h2 className="text-xl">break anchor design</h2>
        <div className="h-0.5 w-full mt-5 mb-0 bg-white/50"></div>
      </div>
      <div id="external-link-group" className="mt-10 w-full">
        <ul className="flex flex-col gap-2">
          <NavLink href="https://www.linkedin.com/in/jannamicole/" label="LinkedIn">
            <svg fill="currentColor" viewBox="0 0 16 16" height="1.4rem" width="1.4rem">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </NavLink>
          <NavLink href="/resume/JCurtis_2023_Resume.pdf" label="Resume">
            <svg viewBox="0 0 800 1000" fill="currentColor" height="1.4rem" width="1.4rem">
              <path d="M700 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h600m0 800V150H100v700h600M450 600v50H200v-50h250m150-200v50H400v-50h200m-200-50V250h200v100H400m-50-100v200H200V250h150m-50 250v50H200v-50h100m50 50v-50h250v50H350m250 150v50H200v-50h400m-100-50v-50h100v50H500" />
            </svg>
          </NavLink>
          <NavLink href="https://cal.com/jannacurtis" label="Contact">
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4rem" width="1.4rem">
              <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z" />
              <path d="M11 17.414l5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z" />
            </svg>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

const MobileNavPanel = () => {
  const [opened, toggle] = useToggle(false);

  return (
    <nav className="bg-slate-800 sticky w-full md:hidden z-40 py-3 px-2 flex items-center justify-center">
      <Burger opened={opened} onClick={toggle} className="absolute left-3 z-50" />
      <h1 className="text-2xl">Janna Curtis</h1>
      <motion.aside
        className="fixed left-0 top-0 bottom-0 bg-slate-600 overflow-hidden"
        initial={false}
        animate={opened ? 'open' : 'closed'}
        variants={mobileAside}
      >
        <motion.div variants={mobileMenuContainer} className="mt-14 p-4">
          <motion.h1 variants={mobileMenuItems} className="text-base font-semibold text-center">
            break anchor design
          </motion.h1>
          <motion.div
            variants={mobileMenuItems}
            className="h-0.5 w-full mt-2 mb-4 bg-white/50"
          ></motion.div>
          <motion.ul variants={mobileMenuItems} className="flex flex-col gap-1 w-full">
            <NavLink href="https://www.linkedin.com/in/jannamicole/" label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 16 16" height="1.4rem" width="1.4rem">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </NavLink>
            <NavLink href="/resume/JCurtis_2023_Resume.pdf" label="Resume">
              <svg viewBox="0 0 800 1000" fill="currentColor" height="1.4rem" width="1.4rem">
                <path d="M700 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h600m0 800V150H100v700h600M450 600v50H200v-50h250m150-200v50H400v-50h200m-200-50V250h200v100H400m-50-100v200H200V250h150m-50 250v50H200v-50h100m50 50v-50h250v50H350m250 150v50H200v-50h400m-100-50v-50h100v50H500" />
              </svg>
            </NavLink>
            <NavLink href="https://cal.com/jannacurtis" label="Contact">
              <svg viewBox="0 0 24 24" fill="currentColor" height="1.4rem" width="1.4rem">
                <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z" />
                <path d="M11 17.414l5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z" />
              </svg>
            </NavLink>
          </motion.ul>
        </motion.div>
      </motion.aside>
    </nav>
  );
};

const NavPanel = ({}) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      const authorData = await getAuthor();

      if (authorData) {
        setAuthor(authorData[0]);
        console.log('NavPanel.jsx: ', authorData);
      }
    };

    fetchAuthor();
  }, []);

  return (
    <>
      <MobileNavPanel />
      <DesktopNavPanel author={author} />
    </>
  );
};

export default NavPanel;
