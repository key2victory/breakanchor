'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CardTypes = Object.freeze({
  design: 'bg-sky-500',
  presentation: 'bg-amber-500',
  research: 'bg-rose-500',
  articles: 'bg-emerald-500',
});

const Card = (props) => {
  const { id, slug, type, title, selectedType } = props;

  // console.log('Card Props: ', props);

  const getCardColor = () => {
    if (type !== null) {
      return CardTypes[type];
    }

    return 'bg-zinc-800';
  };

  return (
    <motion.div
      layout
      layoutScroll
      className={`relative rounded-lg overflow-hidden before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:inset-0  ${getCardColor()} ${
        selectedType === null
          ? ''
          : selectedType === type
          ? 'order-1'
          : 'order-2 before:bg-black/40'
      }`}
    >
      <Link href="/[slug]" as={`/${slug}`} className="h-[240px] flex items-end cursor-pointer">
        <div className="bg-gray-500 px-4 py-2 w-full">
          <h2 className="text-left text-lg">{title}</h2>
          <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
            {type.toUpperCase()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
