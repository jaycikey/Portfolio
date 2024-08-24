import { Typography } from '@mui/material';

const DefaultAboutContent = () => {
  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to the About Page
      </Typography>
      <Typography variant="body1">
        Select an option from the sidebar to learn more about me.
      </Typography>
    </div>
  );
};

export default DefaultAboutContent;
