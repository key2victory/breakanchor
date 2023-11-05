import { useState, useEffect } from 'react';
import { getProjects } from '@/sanity/api/getProjects';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import ProjectCard from '@/src/components/ProjectCard';

const ProjectList = ({ selectedFilter }) => {
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectListData = await getProjects();

      if (projectListData) {
        setProjectList(projectListData);
        console.log('Project List Data: ', projectListData);
      }
    };

    fetchProjects();
  }, []);

  if (projectList === null) return <LoadingSpinner height="h-16" width="w-16" />;

  return (
    <div className="mt-4 sm:mt-5 flex-1 scrollbar-hide overflow-y-auto overscroll-contain w-full grid grid-cols-1 min-[811px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] min-[811px]:grid-rows-[repeat(auto-fill,minmax(240px,1fr))] gap-3">
      {projectList.map((project, index) => (
        <ProjectCard
          key={`project-card-${index}`}
          project={project}
          selectedType={selectedFilter}
        />
      ))}
    </div>
  );
};

export default ProjectList;
