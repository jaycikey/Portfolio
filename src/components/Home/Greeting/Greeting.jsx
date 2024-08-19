import { Box } from '@mui/material';
import Name from './Name/Name';
import Role from './Role/Role';
import Description from './Description/Description';
import useBreakpoint from '../../../hooks/useBreakpoint';

const Greeting = () => {
  const { isSm, isMd, isLg } = useBreakpoint();

  const getPaddingTop = () => {
    const windowHeight = window.innerHeight;
    if (windowHeight < 600) return '16px';
    if (isSm) return '96px';
    if (isMd) return '90px';
    if (isLg) return '176px';
    return '236px';
  };

  const textContainerStyles = {
    pt: getPaddingTop(),
    pl: isSm ? 0 : isMd ? '34px' : 0,
    maxWidth: isSm ? '320px' : '500px',
  };

  return (
    <Box sx={textContainerStyles}>
      <Name />
      <Role />
      <Description />
    </Box>
  );
};

export default Greeting;
