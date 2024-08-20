import Header from '../shared/components/Header/Header';
import About from '../components/About/About';
import Footer from '../shared/components/Footer/Footer';
import useBreakpoints from '../hooks/useBreakpoint';
import Container from '../components/Conteiner/Conteiner';

const AboutPage = () => {
  const { isSm, isMd } = useBreakpoints();
  const isSmallScreen = isSm || isMd;

  return (
    <Container>
      <div className="about-page">
        <Header />
        <About />
        {isSmallScreen && <Footer />}
      </div>
    </Container>
  );
};

export default AboutPage;
