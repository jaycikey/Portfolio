import { Box } from '@mui/material';
import BgImg from '../../BgImg/BgImg';
import { useSelector } from 'react-redux';
import useBreakpoints from '../../hooks/useBreakpoint';

const Container = ({ children }) => {
  const brandWidth = useSelector(state => state.width.brandWidth);
  const { isSm, isMd, isLg } = useBreakpoints();
  const isSmallScreen = isSm || isMd;

  const paddingLeft = isSmallScreen ? 24 : brandWidth;
  const paddingRight = isSmallScreen ? paddingLeft : 0;

  const contentStyles = {
    position: 'relative',
    paddingLeft: `${paddingLeft}px`,
    paddingRight: `${paddingRight}px`,
  };

  return (
    <Box sx={contentStyles}>
      {!isSmallScreen && !isLg && <BgImg />}
      {children}
    </Box>
  );
};

export default Container;
