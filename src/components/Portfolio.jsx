'use client';

import { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import { getProjectCategories } from '@/sanity/api/getProjectCategories';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [categories, setCategories] = useState(null);

  const handleFilterClick = (cardType) => {
    setSelectedFilter(cardType);
  };

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
        <h1 className="text-6xl font-semibold">Portfolio</h1>
        <div className="h-1 w-full bg-white my-4"></div>

        {/* Portfolio Filters */}
        <nav>
          <ul className="flex gap-4 text-xl font-medium ">
            <li>
              <button
                className={`${
                  selectedFilter === null
                    ? 'transition duration-300 ease-in-out underline underline-offset-4 font-semibold'
                    : ''
                }`}
                onClick={() => handleFilterClick(null)}
              >
                All
              </button>
            </li>
            {categories
              .sort((a, b) => (a.title < b.title ? -1 : a.title < b.title ? 1 : 0)) // Sorts alphabetically
              .map((category) => (
                <li key={category._id}>
                  <button
                    className={`${
                      selectedFilter === category.value
                        ? 'transition duration-300 ease-in-out underline underline-offset-4 font-semibold'
                        : ''
                    }`}
                    onClick={() => handleFilterClick(category.value)}
                  >
                    {category.title}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      <ProjectList selectedFilter={selectedFilter} />
    </>
  );
};

export default Portfolio;
