import { Box, useTheme } from '@mui/material';
import FilterTab from '../FilterTab/FilterTab';
import useBreakpoints from '../../../hooks/useBreakpoint';

const FilterBar = () => {
  const { isSm } = useBreakpoints();

  const theme = useTheme();

  const barStyles = {
    display: 'flex',
    borderTop: isSm ? `1px solid ${theme.palette.divider.main}` : 'none',
    borderBottom: `1px solid ${theme.palette.divider.main}`,
  };
  return (
    <Box sx={barStyles}>
      <FilterTab />
    </Box>
  );
};
export default FilterBar;
