import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import theme from '../shared/theme/theme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import projects from './projects.json';
import useRealViewportHeight from '../hooks/useRealViewportHeight';

const App = () => {
  useRealViewportHeight();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/projects"
                element={<ProjectsPage projects={projects} />}
              />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
