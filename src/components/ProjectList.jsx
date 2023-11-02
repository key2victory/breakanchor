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
    <div className="mt-6 flex-1 overflow-y-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 pr-4">
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
