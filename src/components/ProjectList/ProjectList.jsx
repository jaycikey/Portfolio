import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Project from './Project/Project';

const ProjectList = ({ projects }) => {
  const theme = useTheme();

  const projectsStyles = {
    backgroundColor: theme.palette.background.default,
    p: 2,
  };

  const projectListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    p: 0,
    m: 0,
  };

  const projectTitleStyles = {
    color: theme.palette.secondary.green,
  };

  return (
    <Box sx={projectsStyles}>
      <Typography variant="h3" sx={projectTitleStyles}>
        My Projects
      </Typography>
      <Box component="ul" sx={projectListStyles}>
        {projects.map(project => (
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
  );
};

export default ProjectList;
