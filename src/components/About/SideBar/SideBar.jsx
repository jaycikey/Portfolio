/**
 * The icons on the most left side are the following:
 *
 * professional-info: experience, skills, certificates
 * personal-info (shown in the design): bio, interest, etc.
 * hobbies: music, books, hiking, games, etc.
 *
 * You can add anything else you need.
 */

import { Box, List, ListItem, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const SideBar = () => {
  const theme = useTheme();

  const sideBarStyles = {
    width: '60px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${theme.palette.divider}`,
  };

  const sideBarItemStyles = {
    marginBottom: '1.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
  };

  const iconStyle = {
    fontSize: '30px',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  };

  return (
    <Box sx={sideBarStyles}>
      <List>
        <ListItem sx={sideBarItemStyles}>
          <NavLink
            to="/about/professional-info"
            style={{ textDecoration: 'none' }}
            aria-label="Professional Information"
          >
            {({ isActive }) => (
              <TerminalIcon
                sx={{
                  ...iconStyle,
                  color: isActive
                    ? theme.palette.text.primary
                    : theme.palette.text.secondary,
                }}
              />
            )}
          </NavLink>
        </ListItem>
        <ListItem sx={sideBarItemStyles}>
          <NavLink
            to="/about/personal-info"
            style={{ textDecoration: 'none' }}
            aria-label="Personal Information"
          >
            {({ isActive }) => (
              <ContactMailIcon
                sx={{
                  ...iconStyle,
                  color: isActive
                    ? theme.palette.text.primary
                    : theme.palette.text.secondary,
                }}
              />
            )}
          </NavLink>
        </ListItem>
        <ListItem sx={sideBarItemStyles}>
          <NavLink
            to="/about/hobbies"
            style={{ textDecoration: 'none' }}
            aria-label="Hobbies"
          >
            {({ isActive }) => (
              <VideogameAssetIcon
                sx={{
                  ...iconStyle,
                  color: isActive
                    ? theme.palette.text.primary
                    : theme.palette.text.secondary,
                }}
              />
            )}
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
