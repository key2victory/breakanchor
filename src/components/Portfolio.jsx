import PostContainer from './PostContainer';
import ProjectList from './ProjectList';

const Portfolio = ({ selectedFilter, handleFilterClick }) => {
  return (
    <>
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
                className={`${selectedFilter === 'research' ? 'underline underline-offset-4' : ''}`}
                onClick={() => handleFilterClick('research')}
              >
                Research
              </button>
            </li>
            <li>
              <button
                className={`${selectedFilter === 'articles' ? 'underline underline-offset-4' : ''}`}
                onClick={() => handleFilterClick('articles')}
              >
                Articles
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <ProjectList selectedFilter={selectedFilter} />
    </>
  );
};

export default Portfolio;
