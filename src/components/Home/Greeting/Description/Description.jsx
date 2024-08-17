import { Typography, useTheme, Link, Box } from '@mui/material';
import Instructions from '../../../../shared/components/Instructions/Instructions';
import useBreakpoint from '../../../../hooks/useBreakpoint';

const Description = () => {
  const theme = useTheme();
  const isXs = useBreakpoint('md');
  const githubLink = 'https://github.com/jaycikey';

  const descriptionStyles = {
    mt: isXs ? 24 : 2,
  };

  const textSize = {
    fontSize: isXs ? theme.typography.caption : theme.typography.body1,
  };

  const linkStyles = {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    color: theme.palette.accent.main,
  };

  const pinkTextStyles = {
    color: theme.palette.accent.pink,
  };

  const greenTextStyles = {
    color: theme.palette.accent.green,
  };

  return (
    <Box sx={descriptionStyles}>
      <Instructions>
        {isXs ? (
          <>{'find my profile on Github:'}</>
        ) : (
          <>
            {'Complete the game to continue.'}
            {'You can also see it on my GitHub page.'}
          </>
        )}
      </Instructions>
      <Box component="span" sx={textSize}>
        <Typography component="span" sx={{ ...textSize, ...pinkTextStyles }}>
          {`const `}
        </Typography>
        <Typography component="span" sx={{ ...textSize, ...greenTextStyles }}>
          {`githubLink `}
        </Typography>
        {` = `}
        <Link href={githubLink} sx={{ ...textSize, ...linkStyles }}>
          {`"${githubLink}"`}
        </Link>
      </Box>
    </Box>
  );
};

export default Description;
