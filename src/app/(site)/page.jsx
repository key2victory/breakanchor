'use client';

import { useState } from 'react';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Portfolio from '@/src/components/Portfolio';
import { pageAnimations } from '@/src/utils/animations';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (cardType) => {
    setSelectedFilter(cardType);
  };

  return (
    <AnimatePresence mode="wait">
      <LayoutGroup>
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
          <Portfolio selectedFilter={selectedFilter} handleFilterClick={handleFilterClick} />
        </motion.section>
      </LayoutGroup>
    </AnimatePresence>
  );
}
