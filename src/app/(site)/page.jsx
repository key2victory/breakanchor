'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Portfolio from '@/src/components/Portfolio';
import { pageAnimations } from '@/src/utils/animations';

export default function Home() {
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
          className="text-white max-h-screen flex flex-col w-full p-6"
        >
          <Portfolio />
        </motion.section>
      </LayoutGroup>
    </AnimatePresence>
  );
}
