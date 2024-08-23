import Container from './Container/Container';
import Scroll from './Scroll/Scroll';
import TabList from './TabList/TabList';
import { Box } from '@mui/material';

const ContentView = () => {
  return (
    <Box>
      <TabList />
      <Container />
      <Scroll />
    </Box>
  );
};
export default ContentView;
