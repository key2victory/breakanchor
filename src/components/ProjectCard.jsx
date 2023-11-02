'use client';

import { motion } from 'framer-motion';
import MotionLink from './MotionLink';
//import { colorThemes } from '../utils/colors';

const colorThemes = {
  red: {
    primaryBg: 'bg-red-500',
    secondaryBg: 'bg-red-600',
  },
  orange: {
    primaryBg: 'bg-orange-500',
    secondaryBg: 'bg-orange-600',
  },
  amber: {
    primaryBg: 'bg-amber-500',
    secondaryBg: 'bg-amber-600',
  },
  yellow: {
    primaryBg: 'bg-yellow-500',
    secondaryBg: 'bg-yellow-600',
  },
  lime: {
    primaryBg: 'bg-lime-500',
    secondaryBg: 'bg-lime-600',
  },
  green: {
    primaryBg: 'bg-green-500',
    secondaryBg: 'bg-green-600',
  },
  emerald: {
    primaryBg: 'bg-emerald-500',
    secondaryBg: 'bg-emerald-600',
  },
  teal: {
    primaryBg: 'bg-teal-500',
    secondaryBg: 'bg-teal-600',
  },
  cyan: {
    primaryBg: 'bg-cyan-500',
    secondaryBg: 'bg-cyan-600',
  },
  sky: {
    primaryBg: 'bg-sky-500',
    secondaryBg: 'bg-sky-600',
  },
  blue: {
    primaryBg: 'bg-blue-500',
    secondaryBg: 'bg-blue-600',
  },
  indigo: {
    primaryBg: 'bg-indigo-500',
    secondaryBg: 'bg-indigo-600',
  },
  violet: {
    primaryBg: 'bg-violet-500',
    secondaryBg: 'bg-violet-600',
  },
  purple: {
    primaryBg: 'bg-purple-500',
    secondaryBg: 'bg-purple-600',
  },
  fuchsia: {
    primaryBg: 'bg-fuchsia-500',
    secondaryBg: 'bg-fuchsia-600',
  },
  pink: {
    primaryBg: 'bg-pink-500',
    secondaryBg: 'bg-pink-600',
  },
  rose: {
    primaryBg: 'bg-rose-500',
    secondaryBg: 'bg-rose-600',
  },
  slate: {
    primaryBg: 'bg-slate-800',
    secondaryBg: 'bg-slate-600',
  },
};

const ProjectCard = ({ _id, title, slug, category, selectedType }) => {
  const projectCardId = `project-card-${_id}`;

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
          } ${colorThemes[category.color ?? 'slate'].primaryBg}`}
        >
          <div className={`px-4 py-2 w-full ${colorThemes[category.color ?? 'slate'].secondaryBg}`}>
            <h2 className="text-left text-lg truncate">{title}</h2>
            <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
              {category?.title?.toUpperCase() ?? 'PROJECT'}
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
          } ${colorThemes[category.color ?? 'slate'].primaryBg}`}
        >
          <div className={`px-4 py-2 w-full ${colorThemes[category.color ?? 'slate'].secondaryBg}`}>
            <h2 className="text-left text-lg truncate">{title}</h2>
            <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
              {category?.title?.toUpperCase() ?? 'PROJECT'}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
