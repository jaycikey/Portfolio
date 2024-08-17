import { Box } from '@mui/material';
import backgroundImage from '../shared/assets/background.svg';
import { useSelector } from 'react-redux';
import useBreakpoint from '../hooks/useBreakpoint';

const BgImg = () => {
  const brandWidth = useSelector(state => state.width.brandWidth);
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const backgroundStyles = {
    ml: isSmallScreen ? 0 : `${brandWidth}px`,
    position: 'absolute',
    height: isSmallScreen ? '430px' : '742px',
    width: isSmallScreen ? '430px' : '800px',
    background: `url(${backgroundImage}) no-repeat right center`,
    backgroundSize: 'cover',
  };

  return <Box sx={backgroundStyles} />;
};

export default BgImg;
