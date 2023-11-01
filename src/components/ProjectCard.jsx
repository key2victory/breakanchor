'use client';

import { motion } from 'framer-motion';
import MotionLink from './MotionLink';

const colorThemes = {
  red: {
    primaryBg: 'bg-red-500',
    secondaryBg: 'bg-red-300',
  },
  orange: {
    primaryBg: 'bg-orange-500',
    secondaryBg: 'bg-orange-300',
  },
  amber: {
    primaryBg: 'bg-amber-500',
    secondaryBg: 'bg-amber-300',
  },
  yellow: {
    primaryBg: 'bg-yellow-500',
    secondaryBg: 'bg-yellow-300',
  },
  lime: {
    primaryBg: 'bg-lime-500',
    secondaryBg: 'bg-lime-300',
  },
  green: {
    primaryBg: 'bg-green-500',
    secondaryBg: 'bg-green-300',
  },
  emerald: {
    primaryBg: 'bg-emerald-500',
    secondaryBg: 'bg-emerald-300',
  },
  teal: {
    primaryBg: 'bg-teal-500',
    secondaryBg: 'bg-teal-300',
  },
  cyan: {
    primaryBg: 'bg-cyan-500',
    secondaryBg: 'bg-cyan-300',
  },
  sky: {
    primaryBg: 'bg-sky-500',
    secondaryBg: 'bg-sky-300',
  },
  blue: {
    primaryBg: 'bg-blue-500',
    secondaryBg: 'bg-blue-300',
  },
  indigo: {
    primaryBg: 'bg-indigo-500',
    secondaryBg: 'bg-indigo-300',
  },
  violet: {
    primaryBg: 'bg-violet-500',
    secondaryBg: 'bg-violet-300',
  },
  purple: {
    primaryBg: 'bg-purple-500',
    secondaryBg: 'bg-purple-300',
  },
  fuchsia: {
    primaryBg: 'bg-fuchsia-500',
    secondaryBg: 'bg-fuchsia-300',
  },
  pink: {
    primaryBg: 'bg-pink-500',
    secondaryBg: 'bg-pink-300',
  },
  rose: {
    primaryBg: 'bg-rose-500',
    secondaryBg: 'bg-rose-300',
  },
  slate: {
    primaryBg: 'bg-slate-800',
    secondaryBg: 'bg-slate-600',
  },
};

const ProjectCard = ({ _id, title, slug, category, selectedType }) => {
  const projectCardId = `project-card-${_id}`;

  console.log('Card: ', { title: title, color: category.color });

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
          <div className="bg-gray-500 px-4 py-2 w-full">
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
          <div className="bg-gray-500 px-4 py-2 w-full">
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
