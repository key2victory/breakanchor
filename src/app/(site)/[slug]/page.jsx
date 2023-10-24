'use client';

import { getBlog } from '@/sanity/api/getBlog';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { pageAnimations } from '@/src/utils/animations';
import Post from '@/src/components/Post';
import LoadingSpinner from '@/src/components/LoadingSpinner';

const PostPage = (props) => {
  const slug = props.params.slug;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async (slug) => {
      if (!slug) return;

      const postData = await getBlog(slug);
      if (postData) setPost(postData);
    };

    fetchPost(slug);
  }, [slug]);

  if (!slug || !post) return <LoadingSpinner height="h-16" width="w-16" />;

  return (
    <AnimatePresence mode="wait">
      <LayoutGroup>
        <motion.section
          layout
          key="selected-card"
          variants={pageAnimations}
          initial={'animateOutRight'}
          animate={'animateIn'}
          exit={'animateOutRight'}
          id="card-data"
          className="text-white max-h-screen flex flex-col p-6"
        >
          <Post data={post} />
        </motion.section>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default PostPage;
