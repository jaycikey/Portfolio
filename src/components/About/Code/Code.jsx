/**
 * the “details” button on the code snippet;
 * this is a place where you can write some explanation about your code.
 * This snippet of code is a great way to showcase your work, some smart solution, how nicely you format your code and more.
 *
 * The stars are a way to get some reaction from the visitors on your site.
 * You can store their Stars on your snippets to showcase popularity.
 */

/**
 * For the code snippets, you can use an existing formatting NPM package for the highlighting.
 * You could play around and integrate with the Github Gist API to pull from there.
 */

/**
 * On the left, under “personal-info” you can see the folder structure.
 * This is where you can store your content and split the “about me” information.
 * Think of this as a CV - you write everything about you, some are personal, some are professional.
 *
 * This personal site should be enough to send to future employers both as a personal showcase project and CV type of information.
 */

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
