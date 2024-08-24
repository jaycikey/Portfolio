import { Box, useTheme } from '@mui/material';
import FilterTab from '../FilterTab/FilterTab';

const FilterBar = () => {
  const theme = useTheme();

  const barStyles = {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.divider.main}`,
  };
  return (
    <Box sx={barStyles}>
      <FilterTab />
    </Box>
  );
};
export default FilterBar;
