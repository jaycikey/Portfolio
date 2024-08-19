import { Box } from '@mui/material';

const Container = ({ children }) => {
  const contentStyles = {
    position: 'relative',
    paddingLeft: '16px',
    paddingRight: '16px',
  };

  return (
    <Box sx={contentStyles}>
      {children}
    </Box>
  );
};

export default Container;
