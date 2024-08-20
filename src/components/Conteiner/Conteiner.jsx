import { Box, useTheme } from '@mui/material';
import useRealViewportHeight from '../../hooks/useRealViewportHeight';

const Container = ({ children }) => {
  const theme = useTheme();
  useRealViewportHeight();

  const mainContentStyles = {
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    borderRadius: '20px',
    padding: '4px',
    boxSizing: 'border-box',
    height: 'calc(var(--vh, 1vh) * 100)',
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    paddingLeft: 'env(safe-area-inset-left',
    paddingRight: 'env(safe-area-inset-right)',
    overflowY: 'hidden',
  };

  const contentStyles = {
    border: `1px solid ${theme.palette.divider.main}`,
    borderRadius: '16px',
    height: 'calc(var(--vh, 1vh) * 100)',
    boxSizing: 'border-box',
  };

  return (
    <Box sx={mainContentStyles}>
      <Box sx={contentStyles}>{children}</Box>
    </Box>
  );
};

export default Container;
