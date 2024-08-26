import useBreakpoint from '../../../hooks/useBreakpoint';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from '../Conteiner/Conteiner';
import { Box } from '@mui/material';
import Loader from '../Loader/Loader';

const Layout = ({ children, loading = false }) => {
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(var(--vh, 1vh) * 100 - 2px)',
  };

  const loaderStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1300,
    pointerEvents: 'none',
  };

  return (
    <Container>
      <Box sx={{ position: 'relative' }}>
        <Box sx={contentStyles}>
          <Header />
          {children}
          {!isSmallScreen && <Footer />}
        </Box>

        {loading && (
          <Box sx={loaderStyles}>
            <Loader />
          </Box>
        )}
      </Box>
    </Container>
  );
};
export default Layout;
