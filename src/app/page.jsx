'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import { testCards } from '@/utils/test-data';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import NavPanel from '@/components/NavPanel';

const enterTransition = {
  opacity: {
    duration: 0.4,
  },
  x: {
    duration: 0.5,
    type: 'spring',
  },
};

const exitTransition = {
  opacity: {
    duration: 0.4,
  },
  x: {
    delay: 0.4,
    duration: 0.5,
    type: 'spring',
  },
};

const pageAnimations = {
  animateIn: {
    opacity: 1,
    x: 0,
    transition: enterTransition,
  },
  animateOutLeft: {
    opacity: 0.4,
    x: -1000,
    transition: exitTransition,
  },
  animateOutRight: {
    opacity: 0.4,
    x: 1000,
    transition: exitTransition,
  },
};

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleFilterClick = (cardType) => {
    setSelectedFilter(cardType);
  };

  return (
    <main className="overflow-hidden grid grid-cols-[300px_1fr] min-h-screen">
      {/* Fixed positioned screen size buttons */}

      {/* Sidebar */}
      <NavPanel/>
   
      <nav className="bg-gray-600 z-10 flex flex-col items-center pt-12 px-8">
        <div id="name-group" className="flex flex-col items-center ">
          <div className="relative h-[150px] w-[150px] hexagon">
            <Image src="/profile.png" alt="Portrait of Janna Curtis" className="" fill={true} />
          </div>
          <h1 className="mt-5 text-3xl">Janna Curtis</h1>
          <div className="h-0.5 w-full mt-3 mb-0.5 bg-white/50"></div>
          <h2 className="text-xl">break anchor design</h2>
        </div>
        <div id="external-link-group" className="mt-10 w-full">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="https://www.linkedin.com/in/jannamicole/"
                target="_blank"
                className="flex justify-around items-center py-2"
              >
                <svg fill="currentColor" viewBox="0 0 16 16" height="1.6rem" width="1.6rem">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <span className="text-xl">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href="/resume/JCurtis_2023_Resume.pdf"
                target="_blank"
                className="flex justify-around items-center py-2"
              >
                <svg viewBox="0 0 800 1000" fill="currentColor" height="1.6rem" width="1.6rem">
                  <path d="M700 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h600m0 800V150H100v700h600M450 600v50H200v-50h250m150-200v50H400v-50h200m-200-50V250h200v100H400m-50-100v200H200V250h150m-50 250v50H200v-50h100m50 50v-50h250v50H350m250 150v50H200v-50h400m-100-50v-50h100v50H500" />
                </svg>
                <span className="text-xl">Resume</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://cal.com/jannacurtis"
                target="_blank"
                className="flex justify-around items-center py-2 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" height="1.6rem" width="1.6rem">
                  <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z" />
                  <path d="M11 17.414l5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z" />
                </svg>
                <span className="text-xl">Contact</span>
                {/* <svg viewBox="0 0 16 16" fill="currentColor" height="1.6rem" width="1.6rem" className=''>
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 00-.5-.5H1.5A1.5 1.5 0 000 4.5v10A1.5 1.5 0 001.5 16h10a1.5 1.5 0 001.5-1.5V7.864a.5.5 0 00-1 0V14.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h6.636a.5.5 0 00.5-.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.793L6.146 9.146a.5.5 0 10.708.708L15 1.707V5.5a.5.5 0 001 0v-5z"
                  />
                </svg> */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        <LayoutGroup>
          {selectedCard === null ? (
            <motion.section
              layout
              key="cards-container"
              variants={pageAnimations}
              initial={'animateOutLeft'}
              animate={'animateIn'}
              exit={'animateOutLeft'}
              id="portfolio-cards"
              className="text-white max-h-screen w-full p-6 grid-rows-[150px_1fr]"
            >
              <div>
                <h1 className="text-6xl font-semibold">Portfolio</h1>
                <div className="h-1 w-full bg-white my-4"></div>

                {/* Portfolio Filters */}
                <nav>
                  <ul className="flex gap-4 text-xl font-semibold ">
                    <li>
                      <button
                        className={`${
                          selectedFilter === null
                            ? 'transition duration-300 ease-in-out underline underline-offset-4'
                            : ''
                        }`}
                        onClick={() => handleFilterClick(null)}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          selectedFilter === 'design' ? 'underline underline-offset-4' : ''
                        }`}
                        onClick={() => handleFilterClick('design')}
                      >
                        Designs
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          selectedFilter === 'presentation' ? 'underline underline-offset-4' : ''
                        }`}
                        onClick={() => handleFilterClick('presentation')}
                      >
                        Presentations
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          selectedFilter === 'research' ? 'underline underline-offset-4' : ''
                        }`}
                        onClick={() => handleFilterClick('research')}
                      >
                        Research
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          selectedFilter === 'articles' ? 'underline underline-offset-4' : ''
                        }`}
                        onClick={() => handleFilterClick('articles')}
                      >
                        Articles
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Porfolio Cards */}
              <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-4 gap-y-3 w-full h-full overflow-y-scroll pr-4">
                {testCards.map((card, index) => (
                  <PortfolioCard
                    key={`card-${index}`}
                    id={card.id}
                    title={card.title}
                    type={card.type}
                    selectedType={selectedFilter}
                    handleCardClick={() => setSelectedCard(card.id)}
                  />
                ))}
              </div>
            </motion.section>
          ) : (
            <motion.section
              layout
              key="selected-card"
              variants={pageAnimations}
              initial={'animateOutRight'}
              animate={'animateIn'}
              exit={'animateOutRight'}
              id="card-data"
              className="text-white max-h-screen w-full p-6"
            >
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="p-4 rounded-lg hover:bg-indigo-300/90 transition-colors duration-500 ease-in-out"
                >
                  <svg viewBox="0 0 24 24" className="fill-none h-8 w-8">
                    <path
                      fill="currentColor"
                      d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
                    />
                  </svg>
                </button>
                <h1 className="text-6xl font-semibold">
                  {testCards.find((card) => card.id === selectedCard)?.title ?? 'BLURGH'}
                </h1>
              </div>
              <div className="h-1 w-full bg-white my-4"></div>
              <p>{testCards.find((card) => card.id === selectedCard)?.type ?? 'BLAH'}</p>
              <p> This is some text on a screen!</p>
            </motion.section>
          )}
        </LayoutGroup>
      </AnimatePresence>
    </main>
  );
}
