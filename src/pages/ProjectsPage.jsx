import Footer from "../shared/components/Footer/Footer";
import Header from "../shared/components/Header/Header";
import ProjectList from "../components/ProjectList/ProjectList";

const ProjectsPage = ({ projects }) => {
  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
