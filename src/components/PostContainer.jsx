import Card from '@/src/components/Card';

import { useState, useEffect } from 'react';
import { getBlogs } from '@/sanity/api/getBlogs';
import { testCards } from '@/src/utils/test-data';
import LoadingSpinner from '@/src/components/LoadingSpinner';

const PostContainer = ({ selectedFilter }) => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();

      if (blogData) setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

  if (blogs === null) return <LoadingSpinner height="h-16" width="w-16" />;
  return (
    <div className="mt-6 flex-1 overflow-y-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 pr-4">
      {blogs.map((card, index) => (
        <Card
          key={`card-${index}`}
          id={card._id}
          slug={card.slug}
          title={card.title}
          type={card.topics[0].toLowerCase() ?? 'blank'}
          isTest={false}
          selectedType={selectedFilter}
        />
      ))}
      {testCards.map((card, index) => (
        <Card
          key={`card-${index}`}
          id={card._id}
          slug={card.slug}
          title={card.title}
          type={card.type}
          isTest={true}
          selectedType={selectedFilter}
        />
      ))}
      {testCards.map((card, index) => (
        <Card
          key={`card-${index}`}
          id={card._id}
          slug={card.slug}
          title={card.title}
          type={card.type}
          isTest={true}
          selectedType={selectedFilter}
        />
      ))}
    </div>
  );
};

export default PostContainer;
