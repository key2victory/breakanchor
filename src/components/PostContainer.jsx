import Card from '@/components/Card';

import { useState, useEffect } from 'react';
import { getBlogs } from '../../sanity/api/getBlogs';

const PostContainer = ({ selectedFilter }) => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();

      if (blogData) setBlogs(blogData);
    };

    console.log('Fetching posts...');
    fetchBlogs();
  }, []);

  console.log('Blog Data:', blogs);

  if (blogs === null) return null;
  return (
    <>
      {/* Porfolio Cards */}
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 w-full overflow-y-scroll pr-4">
        {blogs.map((card, index) => (
          <Card
            key={`card-${index}`}
            id={card._id}
            slug={card.slug}
            title={card.title}
            type={card.topics[0].toLowerCase()}
            selectedType={selectedFilter}
          />
        ))}
      </div>
    </>
  );
};

export default PostContainer;
