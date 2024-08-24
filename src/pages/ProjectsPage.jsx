import ProjectList from '../components/ProjectList/ProjectList';
import Layout from '../shared/components/Layout/Layout';

const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  );
};

export default ProjectsPage;
