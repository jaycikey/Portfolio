import { Box } from '@mui/material';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import Brand from './Brand/Brand';
import NavLinks from './NavLinks/NavLinks';
import MenuToggle from './MenuToggle/MenuToggle';
import { useTheme } from '@emotion/react';

const Navigation = () => {
  const theme = useTheme();
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const links = [
    { to: '/', label: '_hello' },
    { to: '/about', label: '_about-me' },
    { to: '/projects', label: '_projects' },
    { to: '/contact', label: '_contact-me' },
  ];

  const navStyles = {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.divider.main}`,
    fontFamily: theme.typography.fontFamily,
    alignItems: 'center',
  };

  const iconStyles = {
    color: theme.palette.text.secondary,
  };

  return (
    <Box component="nav" sx={navStyles}>
      <Brand isSmallScreen={isSmallScreen} />
      {isSmallScreen ? (
        <MenuToggle links={links} iconStyles={iconStyles} />
      ) : (
        <NavLinks links={links} />
      )}
    </Box>
  );
};

export default Navigation;
