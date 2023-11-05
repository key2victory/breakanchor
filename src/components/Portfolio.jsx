'use client';

import { useEffect, useState, Fragment } from 'react';
import ProjectList from './ProjectList';
import { getProjectCategories } from '@/sanity/api/getProjectCategories';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [categories, setCategories] = useState(null);

  const handleFilterClick = (cardType) => {
    setSelectedFilter(cardType);
  };

  const filteredClasses =
    'transition duration-300 ease-in-out underline underline-offset-4 font-semibold';

  useEffect(() => {
    const fetchCategories = async () => {
      const projectCategories = await getProjectCategories();

      if (projectCategories) {
        setCategories(projectCategories);
        console.log('Categories: ', projectCategories);
      }
    };

    fetchCategories();
  }, []);

  if (categories === null) return null;

  return (
    <>
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Portfolio</h1>
        <div className="h-0.5 w-full bg-white my-2 sm:my-3"></div>

        {/* Portfolio Filters */}
        <nav>
          <ul className="flex flex-wrap gap-y-1 gap-x-3 text-base sm:text-lg md:text-xl font-medium">
            <li>
              <button
                className={`${selectedFilter === null ? filteredClasses : 'text-white/70'}`}
                onClick={() => handleFilterClick(null)}
              >
                All
              </button>
            </li>
            {categories
              .sort((a, b) => (a.title < b.title ? -1 : a.title < b.title ? 1 : 0)) // Sorts alphabetically
              .map((category) => (
                <Fragment key={category._id}>
                  <span  className='text-white/30'>{' • '}</span>
                  <li>
                    <button
                      className={`${
                        selectedFilter === category.value ? filteredClasses : 'text-white/70'
                      }`}
                      onClick={() => handleFilterClick(category.value)}
                    >
                      {category.title}
                    </button>
                  </li>
                </Fragment>
              ))}
          </ul>
        </nav>
      </div>

      <ProjectList selectedFilter={selectedFilter} />
    </>
  );
};

export default Portfolio;
