'use client';

import { motion } from 'framer-motion';
import MotionLink from './MotionLink';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { useState } from 'react';

const colorThemes = {
  red: {
    primaryBg: 'bg-red-500',
    secondaryBg: 'bg-red-600',
    afterBg: 'after:bg-red-500/20',
  },
  orange: {
    primaryBg: 'bg-orange-500',
    secondaryBg: 'bg-orange-600',
    afterBg: 'after:bg-orange-500/20',
  },
  amber: {
    primaryBg: 'bg-amber-500',
    secondaryBg: 'bg-amber-600',
    afterBg: 'after:bg-amber-500/20',
  },
  yellow: {
    primaryBg: 'bg-yellow-500',
    secondaryBg: 'bg-yellow-600',
    afterBg: 'after:bg-yellow-500/20',
  },
  lime: {
    primaryBg: 'bg-lime-500',
    secondaryBg: 'bg-lime-600',
    afterBg: 'after:bg-lime-500/20',
  },
  green: {
    primaryBg: 'bg-green-500',
    secondaryBg: 'bg-green-600',
    afterBg: 'after:bg-green-500/20',
  },
  emerald: {
    primaryBg: 'bg-emerald-500',
    secondaryBg: 'bg-emerald-600',
    afterBg: 'after:bg-emerald-500/20',
  },
  teal: {
    primaryBg: 'bg-teal-500',
    secondaryBg: 'bg-teal-600',
    afterBg: 'after:bg-teal-500/20',
  },
  cyan: {
    primaryBg: 'bg-cyan-500',
    secondaryBg: 'bg-cyan-600',
    afterBg: 'after:bg-cyan-500/20',
  },
  sky: {
    primaryBg: 'bg-sky-500',
    secondaryBg: 'bg-sky-600',
    afterBg: 'after:bg-sky-500/20',
  },
  blue: {
    primaryBg: 'bg-blue-500',
    secondaryBg: 'bg-blue-600',
    afterBg: 'after:bg-blue-500/20',
  },
  indigo: {
    primaryBg: 'bg-indigo-500',
    secondaryBg: 'bg-indigo-600',
    afterBg: 'after:bg-indigo-500/20',
  },
  violet: {
    primaryBg: 'bg-violet-500',
    secondaryBg: 'bg-violet-600',
    afterBg: 'after:bg-violet-500/20',
  },
  purple: {
    primaryBg: 'bg-purple-500',
    secondaryBg: 'bg-purple-600',
    afterBg: 'after:bg-purple-500/20',
  },
  fuchsia: {
    primaryBg: 'bg-fuchsia-500',
    secondaryBg: 'bg-fuchsia-600',
    afterBg: 'after:bg-fuchsia-500/20',
  },
  pink: {
    primaryBg: 'bg-pink-500',
    secondaryBg: 'bg-pink-600',
    afterBg: 'after:bg-pink-500/20',
  },
  rose: {
    primaryBg: 'bg-rose-500',
    secondaryBg: 'bg-rose-600',
    afterBg: 'after:bg-rose-500/20',
  },
  slate: {
    primaryBg: 'bg-slate-800',
    secondaryBg: 'bg-slate-600',
    afterBg: 'after:bg-slate-500/20',
  },
};

const ProjectCard = ({ project, selectedType }) => {
  const { _id, title, tagLine, slug, category, image, tags } = project;
  const projectCardId = `project-card-${_id}`;
  const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
const [randomOrder, setRandomOrder]=useState(Math.floor(randomNumberInRange(0,500)))
 

  const cardClassName = `group relative rounded-lg flex items-end overflow-hidden min-h-[240px] before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:z-20 before:inset-0 ${
    selectedType === null
      ? ''
      : selectedType === category.value
      ? ''
      : 'before:bg-black/50'
  } ${colorThemes[project.colorTheme ?? category.color ?? 'slate'].primaryBg}`;

  const renderCardContent = () => (
    <>
  
      {image.url ? (
        <div
          className={`shrink-0 overflow-hidden after:absolute after:inset-0 after:content-[''] ${
            colorThemes[project.colorTheme ?? category.color ?? 'slate'].afterBg
          }`}
        >
          <Image
            src={urlForImage(image?.url).width(1920).url()}
            alt={image.alt}
            fill={true}
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            style={{
             filter: selectedType === category.value ? "grayscale(0%) contrast(100%)" : "grayscale(0%) contrast(80%)"
            
            }}
          />
        </div>
      ) : null}
      <div
        className={`px-4 py-2 w-full ${colorThemes[project.colorTheme ?? category.color ?? 'slate'].secondaryBg} z-10`}
        style={{
        //  backdropFilter: "blur(5px)"
        }}
      >
        <h2 className="text-left text-lg truncate">{title}</h2>
        <p className="truncate text-xs">{category?.title?.toUpperCase() ?? 'PROJECT'}</p>
        {/* {tags ? (
          <p className="flex gap-0.5 mt-2 text-xs truncate">
            {tags.map((tag) => (
              <span
                key={`proj-${_id}-tag-${tag}`}
                className={`rounded-full px-2 py-[3px] text-white bg-black/10`}
              >
                {tag}
              </span>
            ))}
          </p>
        ) : null} */}
      </div>
    </>
  );

  return (
    <>
      {slug ? (
        <MotionLink
          layout
          layoutScroll
          href={`/[slug]`}
          as={`/${slug}`}
          id={projectCardId}
          className={cardClassName}
          style={{order: /*project.order !== null ?*/
            selectedType === null || selectedType === category.value
           /* ? project.order
            : project.order + 1000
            : selectedType === null || selectedType === category.value*/
        ? randomOrder
      : randomOrder+1000  }}
        >
          {renderCardContent()}
        </MotionLink>
      ) : (
        <motion.div layout layoutScroll id={projectCardId} className={cardClassName}>
          {renderCardContent()}
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
