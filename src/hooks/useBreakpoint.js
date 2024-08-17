/**
 * xs: 0px (extra-small devices)
 * sm: 600px (small devices, like tablets)
 * md: 900px (medium devices, like small laptops)
 * lg: 1200px (large devices, like desktops)
 * xl: 1536px (extra-large devices, like large desktops)
 */
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useBreakpoints = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isXl = useMediaQuery(theme.breakpoints.down('xl'));

  return { isXs, isSm, isMd, isLg, isXl };
};

export default useBreakpoints;
