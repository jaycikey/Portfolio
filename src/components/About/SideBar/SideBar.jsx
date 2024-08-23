/**
 * professional-info: experience, skills, certificates
 * personal-info (shown in the design): bio, interest, etc.
 * hobbies: music, books, hiking, games, etc.
 */

import { Box } from '@mui/material';

const SideBar = () => {
  return (
    <Box component="ul">
      <Box component="li">professional-info-icon</Box>
      <Box component="li">personal-info-icon</Box>
      <Box component="li">hobbies-icon</Box>
    </Box>
  );
};
export default SideBar;
