import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Project from './Project/Project';
import Sidebar from './Sidebar/Sidebar';
import FilterBar from './FilterBar/FilterBar';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import useBreakpoints from '../../hooks/useBreakpoint';

const ProjectList = ({ projects }) => {
  const { isSm, isMd, isLg } = useBreakpoints();
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

  const containerStyles = {
    display: 'flex',
    flexDirection: isSm ? 'column' : 'row',
    height: '100%',
  };
  const projectsStyles = {
    width: isSm ? '100%' : '80%',
  };

  const projectListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMd || isLg ? 'center' : 'none',
    p: isSm ? '18px 22px' : '40px',
    gap: isSm ? '8px 0' : isMd ? '16px 0' : isLg ? '16px 8px' : '16px 40px',
  };

  const scrollableAreaStyles = {
    maxHeight: isSm
      ? `calc(var(--vh, 1vh) * 100 - 408px)`
      : `calc(var(--vh, 1vh) * 100 - 146px)`,
  };

  return (
    <Box sx={containerStyles}>
      <Sidebar
        technologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onTechnologyChange={handleTechnologyChange}
      />
      <Box sx={projectsStyles}>
        <FilterBar />
        <PerfectScrollbar style={scrollableAreaStyles}>
          <Box component="ul" sx={projectListStyles}>
            {filteredProjects.map((project, index) => (
              <Box component="li" key={project.id}>
                <Project
                  counter={`Project ${index + 1}`}
                  name={project.name}
                  imgUrl={project.imgUrl}
                  description={project.description}
                  icon={project.technologies[0]}
                  link={project.link}
                />
              </Box>
            ))}
          </Box>
        </PerfectScrollbar>
      </Box>
    </Box>
  );
};

export default ProjectList;
