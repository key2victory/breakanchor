'use client';

import { testCards } from '@/utils/test-data';

const Post = ({ selectedCard, handleCardClick }) => {
  return (
    <>
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleCardClick(null)}
          className="p-4 rounded-lg hover:bg-indigo-400 transition-colors duration-500 ease-in-out"
        >
          <svg viewBox="0 0 24 24" className="fill-none h-8 w-8">
            <path
              fill="currentColor"
              d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
            />
          </svg>
        </button>
        <h1 className="text-6xl font-semibold">
          {testCards.find((card) => card.id === selectedCard)?.title ?? 'BLURGH'}
        </h1>
      </div>
      <div className="h-1 w-full bg-white my-4"></div>
      <p>{testCards.find((card) => card.id === selectedCard)?.type ?? 'BLAH'}</p>
      <p> This is some text on a screen!</p>
    </>
  );
};

export default Post;
