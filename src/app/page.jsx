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
      <NavPanel />

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
                  className="p-4 rounded-lg hover:bg-indigo-400 transition-colors duration-500 ease-in-out"
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
