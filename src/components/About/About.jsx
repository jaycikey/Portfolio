import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();

  const aboutStyles = {
    color: theme.palette.text.primary,
    p: 2,
  };

  const aboutListStyles = {
    listStyle: "none",
    p: 0,
  };

  const codeSnippetStyles = {
    mt: 2,
    p: 1.25,
    borderRadius: 1,
    backgroundColor: theme.palette.background.paper,
  };

  return (
    <Box sx={aboutStyles}>
      <Typography variant="h3">About Me</Typography>
      <Box component="ul" sx={aboutListStyles}>
        <Box component="li">Personal Info</Box>
        <Box component="li">Experience</Box>
        <Box component="li">Skills</Box>
      </Box>
      <Box sx={codeSnippetStyles}>
        <pre>
          <code>{`
function initializeGame() {
  // Initialization code here
}
          `}</code>
        </pre>
      </Box>
    </Box>
  );
};

export default About;
