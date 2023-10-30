'use client';

import { motion } from 'framer-motion';
import MotionLink from './MotionLink';

const CardCategories = Object.freeze({
  design: 'bg-sky-500',
  presentation: 'bg-amber-500',
  research: 'bg-rose-500',
  articles: 'bg-emerald-500',
});

const ProjectCard = ({ title, slug, category, selectedType }) => {
  const getCardColor = () => {
    if (category.value.current !== null) {
      return CardCategories[category.value.current];
    }

    return 'bg-zinc-800';
  };

  return (
    <>
      {slug ? (
        <MotionLink
          layout
          layoutScroll
          href={`/[slug]`}
          as={`/${slug}`}
          className={`relative rounded-lg h-[240px] flex items-end overflow-hidden before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:inset-0  ${getCardColor()} ${
            selectedType === null
              ? ''
              : selectedType === category.value.current
              ? 'order-1'
              : 'order-2 before:bg-black/40'
          }`}
        >
          <div className="bg-gray-500 px-4 py-2 w-full">
            <h2 className="text-left text-lg truncate">{title}</h2>
            <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
              {category.title.toUpperCase()}
            </p>
          </div>
        </MotionLink>
      ) : (
        <motion.div
          layout
          layoutScroll
          className={`relative rounded-lg h-[240px] flex items-end overflow-hidden before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:inset-0  ${getCardColor()} ${
            selectedType === null
              ? ''
              : selectedType === category.value.current
              ? 'order-1'
              : 'order-2 before:bg-black/40'
          }`}
        >
          <div className="bg-gray-500 px-4 py-2 w-full">
            <h2 className="text-left text-lg truncate">{title}</h2>
            <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
              {category.title.toUpperCase()}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
