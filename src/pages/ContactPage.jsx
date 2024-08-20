import Header from '../shared/components/Header/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../shared/components/Footer/Footer';
import useBreakpoints from '../hooks/useBreakpoint';
import Container from '../components/Conteiner/Conteiner';

const ContactPage = () => {
  const { isSm, isMd } = useBreakpoints();
  const isSmallScreen = isSm || isMd;

  return (
    <Container>
      <div>
        <Header />
        <Contact />
        {isSmallScreen && <Footer />}
      </div>
    </Container>
  );
};

export default ContactPage;
