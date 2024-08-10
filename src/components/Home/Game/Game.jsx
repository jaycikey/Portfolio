import { useDispatch, useSelector } from "react-redux";
import GameBoard from "./GameBoard/GameBoard";
import ControlButtons from "./ControlButtons/ControlButtons";
import ArrowKeys from "./ArrowKeys/ArrowKeys";
import FoodCount from "./FoodCount/FoodCount";
import GameNotification from "./GameNotification/GameNotification";
import Instructions from "../../../shared/components/Instructions/Instructions";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useGameKeyHandlers from "../../../hooks/useGameKeyHandlers";
import useGameLoop from "../../../hooks/useGameLoop";

const Game = () => {
  const dispatch = useDispatch();
  const { gameStarted, gameOver, win, paused, direction } = useSelector(
    (state) => state.game
  );
  const theme = useTheme();

  useGameKeyHandlers(gameStarted, gameOver, direction, dispatch);
  useGameLoop(gameStarted, gameOver, win, paused, dispatch);

  const appStyles = {
    maxWidth: "778px",
    color: theme.palette.text.primary,
    textAlign: "center",
    p: 2,
  };

  const gameStyles = {
    pt: "120px",
    pl: "50px",
  };

  const gameHolderStyles = {
    display: "flex",
    flexDirection: "row",
    p: 3,
    borderRadius: 1,
    border: "1px solid #0c1616",
    background:
      "linear-gradient(150deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)",
    boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.3) inset",
    backdropFilter: "blur(32px)",
  };

  const leftSideStyles = {
    mr: 3,
    position: "relative",
  };

  const instructionsStyles = {
    p: 2,
    width: "180px",
    borderRadius: 1,
    backgroundColor: "rgba(1, 20, 35, 0.19)",
  };

  return (
    <Box sx={appStyles}>
      <Box sx={gameStyles}>
        <Box sx={gameHolderStyles}>
          <Box sx={leftSideStyles}>
            <GameBoard />
            <GameNotification gameOver={gameOver} win={win} />
          </Box>
          <Box>
            <Box sx={instructionsStyles}>
              <Instructions>
                {"use keyboard"}
                {"arrows to play"}
              </Instructions>
              <ArrowKeys />
            </Box>
            <Instructions>{"food left"}</Instructions>
            <FoodCount />
            <ControlButtons />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
