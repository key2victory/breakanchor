'use client'

import Image from 'next/image';
import Link from 'next/link';


const NavLink = ({href="", target="_blank", children, label="Label"})=>{
  return( <li>
    <Link
      href="https://www.linkedin.com/in/jannamicole/"
      target="_blank"
      className="flex gap-2 items-center py-2 px-4 nav-link"
    >
{children}
      <span>{label}</span>
      <span style={{width: 0, height: "100%", position: "relative"}}>
      <svg style={{position: "absolute", bottom: 0, left: 0}} className="external" width=".8rem" height=".8rem" viewBox="0 0 13 13" fill="currentColor">
<path d="M8.04998 6.36001L2.39398 12.018L0.97998 10.603L6.63698 4.94701L1.68698 -0.00299072H13V11.31L8.04998 6.36001Z" />
</svg></span>
    </Link>
  </li>);};

const NavPanel = ({}) => {
    return (
<nav className="grid-rows-navbar rows-[1_/_span_2] cols-[side_/_span_1] bg-gray-600 flex flex-col items-center pt-12">
        <div id="name-group" className="flex flex-col items-center">
          <Image
            src="/profile.png"
            alt="Portrait of Janna Curtis"
            className="mx-1"
            style={{clipPath: "polygon(5% 25%, 5% 75%, 50% 100%, 95% 75%, 95% 25%, 50% 0%)"}}
            width={138}
            height={138}
          />
          <h1 className="text-2xl">Janna Curtis</h1>
          <h2 className="text-lg">break anchor design</h2>
        </div>
        <div id="external-link-group" className="mt-10">
          <ul className="flex flex-col gap-2">
            <NavLink
            href="https://www.linkedin.com/in/jannamicole/"
            label="Linked In"
          >
            <svg fill="currentColor" viewBox="0 0 16 16" height="1.1rem" width="1.1rem">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
</svg>
          </NavLink>
          <NavLink   
            href="/resume/JCurtis_2023_Resume.pdf"
            label="Resume"
          >
             <svg viewBox="0 0 800 1000" fill="currentColor" height="1.1rem" width="1.1rem">
                  <path d="M700 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h600m0 800V150H100v700h600M450 600v50H200v-50h250m150-200v50H400v-50h200m-200-50V250h200v100H400m-50-100v200H200V250h150m-50 250v50H200v-50h100m50 50v-50h250v50H350m250 150v50H200v-50h400m-100-50v-50h100v50H500" />
                </svg>
          </NavLink>
          <NavLink
          href="https://cal.com/jannacurtis"
          label="Contact"
          >
 <svg viewBox="0 0 24 24" fill="currentColor" height="1.1rem" width="1.1rem">
                  <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z" />
                  <path d="M11 17.414l5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z" />
                </svg>
          </NavLink>

          </ul>
        </div>
      </nav>);
      };

export default NavPanel;