import { Box, useTheme } from '@mui/material';

const Container = ({ children }) => {
  const theme = useTheme();

  const mainContentStyles = {
    width: '100%',
    maxWidth: '1440px',
    height: 'calc(100vh - 8px)',
    margin: '0 auto',
    borderRadius: '20px',
    padding: '4px',
    boxSizing: 'border-box',
  };

  const contentStyles = {
    border: `1px solid ${theme.palette.divider.main}`,
    borderRadius: '16px',
    height: '100%',
    boxSizing: 'border-box',
  };

  return (
    <Box sx={mainContentStyles}>
      <Box sx={contentStyles}>{children}</Box>
    </Box>
  );
};

export default Container;
