import useBreakpoint from '../../../hooks/useBreakpoint';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from '../Conteiner/Conteiner';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
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
        {children}
        {!isSmallScreen && <Footer />}
      </Box>
    </Container>
  );
};
export default Layout;
