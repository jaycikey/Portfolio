import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomButton from '../../../shared/components/CustomButton/CustomButton';
import CustomSvgIcon from '../CustomSvgIcon/CustomSvgIcon';

const Project = ({
  counter,
  name,
  imgUrl = 'https://dummyimage.com/328x145/2a2a2a/ffffff&text=Product+image+placeholder+328x145',
  description,
  icon,
  link,
}) => {
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

  const theme = useTheme();

  const projectStyles = {
    width: '328px',
    position: 'relative',
  };
  const iconStyles = {
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(2),
    fill: theme.palette.primary.dark,
    backgroundColor: theme.palette.accent.green,
    borderRadius: '2px',
    width: '20px',
    height: '20px',
  };
  const nameStyle = {
    color: theme.palette.text.secondary,
  };
  const counterStyle = {
    color: theme.palette.text.royalBlue,
  };
  const imgStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    maxHeight: '145px',
    border: `1px solid ${theme.palette.divider.main}`,
    borderRadius: '15px 15px 0px 0px',
  };
  const descBlockStyles = {
    p: 3,
    border: `1px solid ${theme.palette.divider.main}`,
    borderRadius: '0px 0px 15px 15px',
    minHeight: '172px',
  };
  const descStyle = { mb: 2 };

  return (
    <Box sx={projectStyles}>
      <CustomSvgIcon iconId={iconMap[icon]} sx={iconStyles} />
      <Typography variant="body2" sx={nameStyle}>
        <Box component="span" variant="body2" sx={counterStyle}>
          {counter}
        </Box>
        {` // _${name}`}
      </Typography>
      <Box sx={imgStyles}>
        <img src={imgUrl} alt={name} />
      </Box>
      <Box sx={descBlockStyles}>
        <Typography variant="body2" sx={descStyle}>
          {description}
        </Typography>
        <CustomButton variant="default" href={link} target="_blank">
          view-project
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Project;
