import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Sidebar = ({ technologies }) => {
  const brandWidth = useSelector(state => state.width.brandWidth);
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTechnologies =
    searchParams.get('technologies')?.split(',') || [];

  const sideBar = {
    width: `${brandWidth - 9}px`,
    borderRight: `1px solid ${theme.palette.divider.main}`,
  };
  const filterNameSyles = {
    p: '12px 40px',
    borderBottom: `1px solid ${theme.palette.divider.main}`,
  };
  const filtersSyles = { p: '18px 22px' };

  const handleTechnologyChange = event => {
    const { value, checked } = event.target;
    const updatedTechnologies = checked
      ? [...selectedTechnologies, value]
      : selectedTechnologies.filter(tech => tech !== value);

    if (updatedTechnologies.length > 0) {
      searchParams.set('technologies', updatedTechnologies.join(','));
    } else {
      searchParams.delete('technologies');
    }

    setSearchParams(searchParams);
  };

  return (
    <Box sx={sideBar}>
      <Typography variant="body2" sx={filterNameSyles}>
        projects
      </Typography>
      <FormGroup sx={filtersSyles}>
        {technologies.map(tech => (
          <FormControlLabel
            key={tech}
            control={
              <Checkbox
                value={tech}
                checked={selectedTechnologies.includes(tech)}
                onChange={handleTechnologyChange}
              />
            }
            label={tech}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
