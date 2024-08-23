import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Scroll from './Scroll/Scroll';

const Code = () => {
  const theme = useTheme();

  const codeSnippetStyles = {
    backgroundColor: theme.palette.background.paper,
  };

  return (
    <Box>
      <Box>Code snippet showcase</Box>
      <Typography variant="body1">{`// Code snippet showcase:`}</Typography>
      <Box sx={codeSnippetStyles}>
        <pre>
          <code>{`
function initializeGame() {
  // Initialization code here
}
          `}</code>
        </pre>
      </Box>
      <Scroll />
    </Box>
  );
};

export default Code;
