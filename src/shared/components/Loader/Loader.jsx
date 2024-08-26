import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';

const Loader = () => {
  const theme = useTheme();

  const loaderStyles = {
    width: '32px',
    height: '32px',
    position: 'relative',
    borderRadius: '50%',
    color: theme.palette.secondary.green,
    animation: 'fill 1s ease-in infinite alternate',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      top: 0,
      animation: 'fill 0.9s ease-in infinite alternate',
    },
    '&::before': {
      left: '48px',
    },
    '&::after': {
      right: '48px',
      left: 'auto',
      animationDuration: '1.1s',
    },
    '@keyframes fill': {
      '0%': { boxShadow: '0 0 0 2px inset' },
      '100%': { boxShadow: '0 0 0 10px inset' },
    },
  };

  return <Box sx={loaderStyles} />;
};

export default Loader;
