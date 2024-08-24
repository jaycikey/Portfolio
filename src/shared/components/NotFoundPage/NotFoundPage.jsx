import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: '4rem', marginBottom: '1rem' }}
        >
          404
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontSize: '1.5rem', marginBottom: '2rem' }}
        >
          {`Oops! The page you're looking for doesn't exist.`}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ textTransform: 'none', padding: '0.75rem 1.5rem' }}
        >
          Go Back Home
        </Button>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
