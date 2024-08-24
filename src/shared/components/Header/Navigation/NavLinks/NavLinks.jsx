import { useTheme } from '@emotion/react';
import { Box, ListItemButton, List } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ links, isSmallScreen, handleLinkClick }) => {
  const theme = useTheme();
  const navItemStyles = isLastItem => ({
    p: '14px 14px',
    borderLeft: `1px solid ${theme.palette.divider.main}`,
    borderRight: isLastItem
      ? `1px solid ${theme.palette.divider.main}`
      : 'none',
    mr: isLastItem ? 'auto' : 0,
  });

  const activeLinkStyles = {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  };

  const defaultLinkStyles = {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
  };

  return isSmallScreen ? (
    <List>
      {links.map(link => (
        <ListItemButton key={link.to} onClick={handleLinkClick} sx={{ p: 0 }}>
          <NavLink
            to={link.to}
            style={({ isActive }) =>
              isActive ? activeLinkStyles : defaultLinkStyles
            }
          >
            {link.label}
          </NavLink>
        </ListItemButton>
      ))}
    </List>
  ) : (
    <Box
      component="ul"
      sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}
    >
      {links.map((link, index) => {
        const isLastItem = index === links.length - 2;
        return (
          <Box component="li" key={link.to} sx={navItemStyles(isLastItem)}>
            <NavLink
              to={link.to}
              style={({ isActive }) =>
                isActive ? activeLinkStyles : defaultLinkStyles
              }
            >
              {link.label}
            </NavLink>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavLinks;
