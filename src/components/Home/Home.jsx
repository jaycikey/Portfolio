import { Box } from '@mui/material';
import Game from './Game/Game';
import Greeting from './Greeting/Greeting';
import Conteiner from '../Conteiner/Conteiner';
import useBreakpoint from '../../hooks/useBreakpoint';
import BgImg from '../../BgImg/BgImg';

const Home = () => {
  const { isSm, isMd, isLg } = useBreakpoint();
  const isSmallOrMediumScreen = isSm || isMd || isLg;

  const foregroundStyles = {
    position: 'relative',
    zIndex: 1,
    display: isSmallOrMediumScreen ? 'block' : 'flex',
    flexDirection: isSmallOrMediumScreen ? 'column' : 'row',
    gap: isSmallOrMediumScreen ? 0 : '20px',
    justifyContent: 'center',
  };

  return (
    <Conteiner>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <BgImg />
        <Box sx={foregroundStyles}>
          <Greeting />
          {!isSmallOrMediumScreen && <Game />}
        </Box>
      </Box>
    </Conteiner>
  );
};

export default Home;
