import Header from "../shared/components/Header/Header";
import Footer from "../shared/components/Footer/Footer";
import { Box } from "@mui/material/";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <Box className="home">
      <Header />
      <Home />
      <Footer />
    </Box>
  );
};

export default HomePage;
