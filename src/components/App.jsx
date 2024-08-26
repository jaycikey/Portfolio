import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from '../shared/theme/theme';
import store from '../redux/store';
import projects from './projects.json';
import useRealViewportHeight from '../hooks/useRealViewportHeight';
import NotFoundPage from '../shared/components/NotFoundPage/NotFoundPage';
import Layout from '../shared/components/Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DefaultAboutContent = lazy(() =>
  import('../components/DefaultAboutContent/DefaultAboutContent')
);
const ProfessionalInfo = lazy(() =>
  import('../components/ProfessionalInfo/ProfessionalInfo')
);
const PersonalInfo = lazy(() =>
  import('../components/PersonalInfo/PersonalInfo')
);
const Hobbies = lazy(() => import('../components/Hobbies/Hobbies'));

const App = () => {
  useRealViewportHeight();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Suspense fallback={<Layout loading={true} />}>
            <Box>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />}>
                  <Route index element={<DefaultAboutContent />} />
                  <Route
                    path="professional-info"
                    element={<ProfessionalInfo />}
                  />
                  <Route path="personal-info" element={<PersonalInfo />} />
                  <Route path="hobbies" element={<Hobbies />} />
                </Route>

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
