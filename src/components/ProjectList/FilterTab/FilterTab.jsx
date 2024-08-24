import { Typography, useTheme } from '@mui/material';

const FilterTab = () => {
  const theme = useTheme();

  const tabStyles = {
    color: theme.palette.secondary.main,
    p: '12px 12px',
    borderRight: `1px solid ${theme.palette.divider.main}`,
  };

  return (
    <Typography variant="body2" sx={tabStyles}>
      some tab
    </Typography>
  );
};

export default FilterTab;
