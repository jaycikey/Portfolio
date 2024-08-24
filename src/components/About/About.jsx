import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/SideBar';

const About = () => {
  const aboutStyles = {
    display: 'flex',
    flex: 1,
  };

  const contentStyles = {
    flex: 1,
    padding: '1rem',
  };

  return (
    <Box sx={aboutStyles}>
      <SideBar />
      <Box sx={contentStyles}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default About;
