import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Project from './Project/Project';
import Sidebar from './Sidebar/Sidebar';
import FilterBar from './FilterBar/FilterBar';

const ProjectList = ({ projects }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTechnologies =
    searchParams.get('technologies')?.split(',') || [];

  const filteredProjects =
    selectedTechnologies.length > 0
      ? projects.filter(project =>
          project.technologies.some(tech => selectedTechnologies.includes(tech))
        )
      : projects;

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const handleTechnologyChange = selectedTechs => {
    setSearchParams({
      technologies: selectedTechs.join(','),
    });
  };

  const projectsStyles = {
    width: '100%',
  };

  const projectListStyles = {
    display: 'flex',
    maxWidth: '960px',
    flexWrap: 'wrap',
    p: '116px 128px',
  };
  const containerStyles = { display: 'flex', height: '100%' };

  return (
    <Box sx={containerStyles}>
      <Sidebar
        technologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onTechnologyChange={handleTechnologyChange}
      />
      <Box sx={projectsStyles}>
        <FilterBar />
        <Box component="ul" sx={projectListStyles}>
          {filteredProjects.map(project => (
            <Box component="li" key={project.id}>
              <Project
                name={project.name}
                imgUrl={project.imgUrl}
                description={project.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectList;
