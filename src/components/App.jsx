import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from '../shared/theme/theme';
import store from '../redux/store';
import projects from './projects.json';
import useRealViewportHeight from '../hooks/useRealViewportHeight';
import NotFoundPage from '../shared/components/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

const App = () => {
  useRealViewportHeight();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Box>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/projects"
                  element={<ProjectsPage projects={projects} />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Box>
          </Suspense>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
