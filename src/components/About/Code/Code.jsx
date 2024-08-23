import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Scroll from './Scroll/Scroll';

const Code = () => {
  const theme = useTheme();

  const codeSnippetStyles = {
    backgroundColor: theme.palette.background.paper,
  };
  const codeInfoStyles = {
    display: 'flex',
    gap: 2,
  };
  const detailStyles = {
    display: 'flex',
    gap: 1,
  };
  const avatarStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  };

  const InfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  };

  return (
    <Box>
      <Typography variant="body1">Code snippet showcase List</Typography>
      <Typography variant="body1">{`// Code snippet showcase:`}</Typography>
      <Box sx={codeInfoStyles}>
        <Box sx={avatarStyles}>
          <Typography variant="body1">avatar</Typography>
        </Box>
        <Box sx={InfoStyles}>
          <Typography variant="body1">@username</Typography>
          <Typography variant="body1">Created 5 months ago</Typography>
        </Box>
        <Box sx={detailStyles}>
          <Typography variant="body1">details</Typography>
          <Typography variant="body1">stars</Typography>
        </Box>
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
      <Typography>{`My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.`}</Typography>
      <Scroll />
    </Box>
  );
};

export default Code;
