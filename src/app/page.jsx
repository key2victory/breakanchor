'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import { testCards } from '@/utils/test-data';
import Image from 'next/image';
import Link from 'next/link';
import NavPanel from '@/components/NavPanel';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (cardType) => {
    setSelectedFilter(cardType);
  };

  return (
    <main className="overflow-hidden grid grid-cols-[300px_1fr]">
      {/* Fixed positioned screen size buttons */}

      {/* Sidebar */}
      <NavPanel/>
   

      {/* Main Content */}
      <section id="portfolio" className="text-white max-h-screen w-full p-6 grid-rows-[150px_1fr]">
        <div>
          <h1 className="text-6xl font-semibold">Portfolio</h1>
          <div className="h-1 w-full bg-white my-4"></div>

          {/* Portfolio Filters */}
          <nav>
            <ul className="flex gap-4 text-xl font-semibold ">
              <li>
                <button
                  className={`${
                    selectedFilter === null
                      ? 'transition duration-300 ease-in-out underline underline-offset-4'
                      : ''
                  }`}
                  onClick={() => handleFilterClick(null)}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className={`${selectedFilter === 'design' ? 'underline underline-offset-4' : ''}`}
                  onClick={() => handleFilterClick('design')}
                >
                  Designs
                </button>
              </li>
              <li>
                <button
                  className={`${
                    selectedFilter === 'presentation' ? 'underline underline-offset-4' : ''
                  }`}
                  onClick={() => handleFilterClick('presentation')}
                >
                  Presentations
                </button>
              </li>
              <li>
                <button
                  className={`${
                    selectedFilter === 'research' ? 'underline underline-offset-4' : ''
                  }`}
                  onClick={() => handleFilterClick('research')}
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  className={`${
                    selectedFilter === 'articles' ? 'underline underline-offset-4' : ''
                  }`}
                  onClick={() => handleFilterClick('articles')}
                >
                  Articles
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Porfolio Cards */}
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-4 gap-y-3 w-full h-full overflow-y-scroll pr-4">
          {testCards.map((card, index) => (
            <PortfolioCard
              key={`card-${index}`}
              title={card.title}
              type={card.type}
              selectedType={selectedFilter}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
