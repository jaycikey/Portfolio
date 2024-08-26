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
import CustomSvgIcon from '../CustomSvgIcon/CustomSvgIcon';

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

  const iconMap = {
    HTML: 'icon-html',
    CSS: 'icon-css',
    React: 'icon-react',
    Vue: 'icon-vue',
    Angular: 'icon-angular',
    Gatsby: 'icon-gatsby',
    Flutter: 'icon-flutter',
    Node: 'icon-node',
    JavaScript: 'icon-JavaScript',
  };

  const iconStyles = { mr: 1, fill: theme.palette.secondary.main };

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
                sx={{
                  color: theme.palette.secondary.main,
                  '&.Mui-checked': {
                    color: theme.palette.secondary.green,
                  },
                  '&:hover': {
                    color: theme.palette.secondary.green,
                  },
                }}
              />
            }
            label={
              <Box display="flex" alignItems="center">
                <CustomSvgIcon iconId={iconMap[tech]} sx={iconStyles} />
                {tech}
              </Box>
            }
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
