import { Box } from "@mui/material";
import Game from "./Game/Game";
import Greeting from "./Greeting/Greeting";
import Conteiner from "../Conteiner/Conteiner";

const Home = () => {
  const foregroundStyles = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
  };

  return (
    <Conteiner>
      <Box sx={foregroundStyles}>
        <Greeting />
        <Game />
      </Box>
    </Conteiner>
  );
};

export default Home;
