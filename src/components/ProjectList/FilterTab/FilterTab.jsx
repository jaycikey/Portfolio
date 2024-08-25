import { Typography, useTheme, Box, IconButton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const FilterTab = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const technologies = searchParams.get('technologies');
  const filterName = technologies ? technologies.split(',').join(', ') : 'All';

  const tabStyles = {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    p: '12px 12px',
    borderRight: `1px solid ${theme.palette.divider.main}`,
  };
  const filterNameStyles = { flexGrow: 1 };
  const closeIconStyles = { color: theme.palette.secondary.main, p: 0, ml: 1 };

  const handleRemoveFilters = () => {
    searchParams.delete('technologies');
    setSearchParams(searchParams);
  };

  return (
    <Box sx={tabStyles}>
      <Typography variant="body2" sx={filterNameStyles}>
        {filterName}
      </Typography>
      {technologies && (
        <IconButton
          size="small"
          onClick={handleRemoveFilters}
          sx={closeIconStyles}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

export default FilterTab;
