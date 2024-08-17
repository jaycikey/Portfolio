import { Box, useMediaQuery, useTheme } from '@mui/material';
import BgImg from '../../BgImg/BgImg';
import { useSelector } from 'react-redux';

const Container = ({ children }) => {
  const brandWidth = useSelector(state => state.width.brandWidth);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));

  const contentStyles = {
    position: 'relative',
    padding: `0 0 0 ${isXs ? 28 : brandWidth}px`,
  };

  return (
    <Box sx={contentStyles}>
      <BgImg />
      {children}
    </Box>
  );
};

export default Container;
