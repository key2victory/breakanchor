'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { pageAnimations } from '@/src/utils/animations';
import Project from '@/src/components/Project';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { getProject } from '@/sanity/api/getProject';

const ProjectPage = (props) => {
  const slug = props.params.slug;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async (slug) => {
      if (!slug) return;

      const projectData = await getProject(slug);

      if (projectData) {
        setProject(projectData);
        //console.log('Project Data: ', projectData);
      }
    };

    fetchProject(slug);
  }, [slug]);

  if (!slug || !project) return <LoadingSpinner height="h-16" width="w-16" />;

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
          className="text-white max-h-screen flex flex-col w-full p-6"
        >
          <Project data={project} />
        </motion.section>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default ProjectPage;
