import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useBreakpoint from '../../../../hooks/useBreakpoint';

const Name = () => {
  const theme = useTheme();
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const body1Styles = {
    color: isSmallScreen
      ? theme.palette.text.grey
      : theme.palette.secondary.green,
  };

  const nameStyles = {
    my: 1,
    color: isSmallScreen ? theme.palette.text.grey : theme.palette.text.primary,
    display: 'inline-block',
    fontSize: isSmallScreen ? theme.typography.h2 : theme.typography.h1,
  };

  const breakStyles = {
    display: 'block',
  };

  return (
    <>
      <Typography variant="body1" sx={body1Styles}>
        Hi all, I am
      </Typography>
      <Typography variant="h1" sx={nameStyles}>
        Kulzhynskyi{' '}
        <Box component="span" sx={breakStyles}>
          Kostiantyn
        </Box>
      </Typography>
    </>
  );
};

export default Name;
