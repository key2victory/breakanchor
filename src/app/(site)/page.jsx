'use client';

import { useState } from 'react';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Portfolio from '@/components/Portfolio';
import Post from '@/components/Post';

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

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <AnimatePresence mode="wait">
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
            <Portfolio
              selectedFilter={selectedFilter}
              handleCardClick={handleCardClick}
              handleFilterClick={handleFilterClick}
            />
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
            <Post selectedCard={selectedCard} handleCardClick={handleCardClick} />
          </motion.section>
        )}
      </LayoutGroup>
    </AnimatePresence>
  );
}
