import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Project = ({
  name,
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  description,
}) => {
  const theme = useTheme();

  const projectStyles = {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderColor: theme.palette.divider,
    border: '1px solid',
    p: 1.25,
    m: 1.25,
    width: 200,
  };

  const projectImageStyles = {
    width: '100%',
    height: 'auto',
  };

  const projectNameStyles = {
    fontSize: '1.25rem',
  };

  const projectDescriptionStyles = {
    fontSize: '1rem',
  };

  return (
    <Box sx={projectStyles}>
      <Typography variant="h4" sx={projectNameStyles}>
        {name}
      </Typography>
      <img src={imgUrl} alt={name} style={projectImageStyles} />
      <Typography variant="body1" sx={projectDescriptionStyles}>
        {description}
      </Typography>
    </Box>
  );
};

export default Project;
