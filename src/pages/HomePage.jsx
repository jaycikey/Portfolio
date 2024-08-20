import Header from '../shared/components/Header/Header';
import Footer from '../shared/components/Footer/Footer';
import { Box } from '@mui/material';
import Home from '../components/Home/Home';
import useBreakpoint from '../hooks/useBreakpoint';
import Container from '../components/Conteiner/Conteiner';

const HomePage = () => {
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const homeStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(var(--vh, 1vh) * 100 - 2px)',
  };

  return (
    <Container>
      <Box sx={homeStyles}>
        <Header />
        <Home />
        {!isSmallScreen && <Footer />}
      </Box>
    </Container>
  );
};

export default HomePage;
