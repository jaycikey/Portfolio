import { Box } from '@mui/material';
import Code from './Code/Code';
import AboutList from './AboutList/AboutList';
import SideBar from './SideBar/SideBar';
import ContentView from './ContentView/ContentView';

const About = () => {
  const aboutStyles = {
    display: 'flex',
  };

  return (
    <Box sx={aboutStyles}>
      <SideBar />
      <AboutList />
      <ContentView />
      <Code />
    </Box>
  );
};

export default About;
