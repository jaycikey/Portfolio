import Layout from '../shared/components/Layout/Layout';
import ProjectList from '../components/ProjectList/ProjectList';

const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  );
};

export default ProjectsPage;
