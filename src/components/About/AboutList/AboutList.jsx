import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutList = () => {
  const theme = useTheme();

  const personalStyles = {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.primary,
  };

  const aboutListStyles = {
    p: 0,
  };
  return (
    <Box sx={personalStyles}>
      <Typography variant="body">personal-info</Typography>
      <Box component="ul" sx={aboutListStyles}>
        <Box component="li">bio</Box>
        <Box component="li">interests</Box>
      </Box>
      <Typography variant="body">educations</Typography>
      <Box component="ul" sx={aboutListStyles}>
        <Box component="li">high-school</Box>
        <Box component="li">university</Box>
      </Box>
      <Typography variant="body">contacts</Typography>
      <Box component="ul" sx={aboutListStyles}>
        <Box component="li">user@gmail.com</Box>
        <Box component="li">+3598246359</Box>
      </Box>
    </Box>
  );
};
export default AboutList;
