import Footer from '../shared/components/Footer/Footer';
import Header from '../shared/components/Header/Header';
import ProjectList from '../components/ProjectList/ProjectList';
import useBreakpoints from '../hooks/useBreakpoint';
import Container from '../components/Conteiner/Conteiner';

const ProjectsPage = ({ projects }) => {
  const { isSm, isMd } = useBreakpoints();
  const isSmallScreen = isSm || isMd;

  return (
    <Container>
      <div>
        <Header />
        <ProjectList projects={projects} />
        {isSmallScreen && <Footer />}
      </div>
    </Container>
  );
};

export default ProjectsPage;
