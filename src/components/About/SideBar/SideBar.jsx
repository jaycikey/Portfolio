/**
 * The icons on the most left side are the following:
 *
 * professional-info: experience, skills, certificates
 * personal-info (shown in the design): bio, interest, etc.
 * hobbies: music, books, hiking, games, etc.
 *
 * You can add anything else you need.
 */

import { Box, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const SideBar = () => {
  const sideBarStyles = {};

  const sideBarItemStyles = {};

  const iconStyle = {};

  return (
    <Box sx={sideBarStyles}>
      <List>
        <ListItem sx={sideBarItemStyles}>
          <Link to="/about/professional-info">
            <TerminalIcon sx={iconStyle} />
          </Link>
        </ListItem>
        <ListItem sx={sideBarItemStyles}>
          <Link to="/about/personal-info">
            <ContactMailIcon sx={iconStyle} />
          </Link>
        </ListItem>
        <ListItem sx={sideBarItemStyles}>
          <Link to="/about/hobbies">
            <VideogameAssetIcon sx={iconStyle} />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
export default SideBar;
