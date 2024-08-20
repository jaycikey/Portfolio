import { Box, useTheme } from '@mui/material';

const Container = ({ children }) => {
  const theme = useTheme();

  const contentStyles = {
    position: 'relative',
    maxWidth: 1440,
    m: '0 auto',
    border: `1px solid ${theme.palette.divider.main}`,
    borderRadius: '16px',
  };

  return <Box sx={contentStyles}>{children}</Box>;
};

export default Container;
