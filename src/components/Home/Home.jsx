import { Box } from '@mui/material';
import Game from './Game/Game';
import Greeting from './Greeting/Greeting';
import Conteiner from '../Conteiner/Conteiner';
import useBreakpoint from '../../hooks/useBreakpoint';

const Home = () => {
  const isXs = useBreakpoint('md');

  const foregroundStyles = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: `${isXs ? 'column' : 'row'}`,
    gap: '150px',
  };

  return (
    <Conteiner>
      <Box sx={foregroundStyles}>
        <Greeting />
        {!isXs && <Game />}
      </Box>
    </Conteiner>
  );
};

export default Home;
