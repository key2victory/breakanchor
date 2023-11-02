import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import ImageComponent from '@/sanity/components/Image';
import { motion } from 'framer-motion';

const colorThemes = {
  red: {
    primaryBg: 'bg-red-500',
    secondaryBg: 'bg-red-600',
    text: 'text-red-500',
    hoverBg: 'hover:bg-red-700',
    hoverText: 'hover:text-red-600',
  },
  orange: {
    primaryBg: 'bg-orange-500',
    secondaryBg: 'bg-orange-600',
    text: 'text-orange-500',
    hoverBg: 'hover:bg-orange-700',
    hoverText: 'hover:text-orange-600',
  },
  amber: {
    primaryBg: 'bg-amber-500',
    secondaryBg: 'bg-amber-600',
    text: 'text-amber-500',
    hoverBg: 'hover:bg-amber-700',
    hoverText: 'hover:text-amber-600',
  },
  yellow: {
    primaryBg: 'bg-yellow-500',
    secondaryBg: 'bg-yellow-600',
    text: 'text-yellow-500',
    hoverBg: 'hover:bg-yellow-700',
    hoverText: 'hover:text-yellow-600',
  },
  lime: {
    primaryBg: 'bg-lime-500',
    secondaryBg: 'bg-lime-600',
    text: 'text-lime-500',
    hoverBg: 'hover:bg-lime-700',
    hoverText: 'hover:text-lime-600',
  },
  green: {
    primaryBg: 'bg-green-500',
    secondaryBg: 'bg-green-600',
    text: 'text-green-500',
    hoverBg: 'hover:bg-green-700',
    hoverText: 'hover:text-green-600',
  },
  emerald: {
    primaryBg: 'bg-emerald-500',
    secondaryBg: 'bg-emerald-600',
    text: 'text-emerald-500',
    hoverBg: 'hover:bg-emerald-700',
    hoverText: 'hover:text-emerald-600',
  },
  teal: {
    primaryBg: 'bg-teal-500',
    secondaryBg: 'bg-teal-600',
    text: 'text-teal-500',
    hoverBg: 'hover:bg-teal-700',
    hoverText: 'hover:text-teal-600',
  },
  cyan: {
    primaryBg: 'bg-cyan-500',
    secondaryBg: 'bg-cyan-600',
    text: 'text-cyan-500',
    hoverBg: 'hover:bg-cyan-700',
    hoverText: 'hover:text-cyan-600',
  },
  sky: {
    primaryBg: 'bg-sky-500',
    secondaryBg: 'bg-sky-600',
    text: 'text-sky-500',
    hoverBg: 'hover:bg-sky-700',
    hoverText: 'hover:text-sky-600',
  },
  blue: {
    primaryBg: 'bg-blue-500',
    secondaryBg: 'bg-blue-600',
    text: 'text-blue-500',
    hoverBg: 'hover:bg-blue-700',
    hoverText: 'hover:text-blue-600',
  },
  indigo: {
    primaryBg: 'bg-indigo-500',
    secondaryBg: 'bg-indigo-600',
    text: 'text-indigo-500',
    hoverBg: 'hover:bg-indigo-700',
    hoverText: 'hover:text-indigo-600',
  },
  violet: {
    primaryBg: 'bg-violet-500',
    secondaryBg: 'bg-violet-600',
    text: 'text-violet-500',
    hoverBg: 'hover:bg-violet-700',
    hoverText: 'hover:text-violet-600',
  },
  purple: {
    primaryBg: 'bg-purple-500',
    secondaryBg: 'bg-purple-600',
    text: 'text-purple-500',
    hoverBg: 'hover:bg-purple-700',
    hoverText: 'hover:text-purple-600',
  },
  fuchsia: {
    primaryBg: 'bg-fuchsia-500',
    secondaryBg: 'bg-fuchsia-600',
    text: 'text-fuchsia-500',
    hoverBg: 'hover:bg-fuchsia-700',
    hoverText: 'hover:text-fuchsia-600',
  },
  pink: {
    primaryBg: 'bg-pink-500',
    secondaryBg: 'bg-pink-600',
    text: 'text-pink-500',
    hoverBg: 'hover:bg-pink-700',
    hoverText: 'hover:text-pink-600',
  },
  rose: {
    primaryBg: 'bg-rose-500',
    secondaryBg: 'bg-rose-600',
    text: 'text-rose-500',
    hoverBg: 'hover:bg-rose-700',
    hoverText: 'hover:text-rose-600',
  },
  slate: {
    primaryBg: 'bg-slate-800',
    secondaryBg: 'bg-slate-600',
    text: 'text-slate-100',
    hoverBg: 'hover:bg-slate-700',
    hoverText: 'hover:text-white',
  },
};

const arrowVariant = {
  rest: {
    x: -20,
    y: 20,
    opacity: 0,
  },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const components = {
  types: {
    image: ({ value, isInline }) => <ImageComponent value={value} isInline={isInline} />,
  },
};

const Project = ({ data }) => {
  return (
    <>
      <div className="flex items-center gap-6">
        <Link
          href={'/'}
          className={`p-4 rounded-lg bg-zinc-900 ${
            colorThemes[data.category.color ?? 'slate'].hoverBg
          } transition-colors duration-500 ease-in-out h-full flex items-center`}
        >
          <svg viewBox="0 0 24 24" className="fill-none h-8 w-8">
            <path
              fill="currentColor"
              d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
            />
          </svg>
        </Link>
        <div className="flex justify-between w-full items-center">
          <div>
            <h1
              className={`text-6xl font-semibold ${
                colorThemes[data.category.color ?? 'slate'].text
              }`}
            >
              {data.title}
            </h1>
            <p
              className={`text-xl font-semibold italic mt-4 ${
                colorThemes[data.category.color ?? 'slate'].text
              }`}
            >
              {data.tagLine}
            </p>
          </div>
          {data?.externalLink?.enableLink ? (
            <Link
              href={data?.externalLink?.linkUrl}
              target="_blank"
              className={`px-6 py-3 rounded-lg bg-zinc-900 ${
                colorThemes[data.category.color ?? 'slate'].hoverBg
              } transition-colors duration-500 ease-in-out h-full flex items-center`}
            >
              <div className="flex items-center gap-4">
                <span>{data?.externalLink?.linkName}</span>
                <span>
                  <svg className="w-3 h-3" viewBox="0 0 13 13" fill="currentColor">
                    <path d="M8.04998 6.36001L2.39398 12.018L0.97998 10.603L6.63698 4.94701L1.68698 -0.00299072H13V11.31L8.04998 6.36001Z" />
                  </svg>
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
      <div
        role="divider"
        className={`h-1 w-full my-4 ${colorThemes[data.category.color ?? 'slate'].primaryBg}`}
      />

      <div className="blog-post-content rounded-md p-2 flex-1 overflow-y-auto">
        <PortableText value={data.content} components={components} />
      </div>
    </>
  );
};

export default Project;
