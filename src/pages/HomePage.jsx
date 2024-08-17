import Header from '../shared/components/Header/Header';
import Footer from '../shared/components/Footer/Footer';
import { Box } from '@mui/material';
import Home from '../components/Home/Home';
import useBreakpoint from '../hooks/useBreakpoint';

const HomePage = () => {
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const homeStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <Box sx={homeStyles}>
      <Header />
      <Home />
      {!isSmallScreen && <Footer />}
    </Box>
  );
};

export default HomePage;
