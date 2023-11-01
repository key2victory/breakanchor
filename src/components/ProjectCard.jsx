'use client';

import { motion } from 'framer-motion';
import MotionLink from './MotionLink';
import { useEffect, useRef } from 'react';

const ProjectCard = ({ _id, title, slug, category, selectedType }) => {
  const cardRef = useRef(null);

  const projectCardId = `project-card-${_id}`;

  // const primaryColor = `hsl(${category.color.hsl.h}, ${category.color.hsl.s * 100}%, ${
  //   category.color.hsl.l * 100
  // }%)`;
  // const secondaryColor = `hsl(${category.color.hsl.h}, ${category.color.hsl.s * 0.7 * 100}%, ${
  //   category.color.hsl.l * 100
  // }%)`;

  // useEffect(() => {
  //   if (cardRef.current === null) cardRef.current = document.getElementById(projectCardId);
  //   cardRef.current.style.setProperty('--project-card-primary', 'primaryColor');
  // });

  return (
    <>
      {slug ? (
        <MotionLink
          layout
          layoutScroll
          href={`/[slug]`}
          as={`/${slug}`}
          id={projectCardId}
          className={`project-card relative rounded-lg h-[240px] flex items-end overflow-hidden before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:inset-0 ${
            selectedType === null
              ? ''
              : selectedType === category.value
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
          id={projectCardId}
          className={`project-card relative rounded-lg h-[240px] flex items-end overflow-hidden before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:inset-0 ${
            selectedType === null
              ? ''
              : selectedType === category.value
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
