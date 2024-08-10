import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  togglePause,
  setInfiniteMode,
} from "../../../../redux/slices/gameSlice";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const ControlButtons = () => {
  const dispatch = useDispatch();
  const { gameStarted, gameOver, win, paused } = useSelector(
    (state) => state.game
  );
  const theme = useTheme();

  const handleStartGame = () => {
    dispatch(startGame());
  };

  const handlePauseResume = () => {
    if (win) {
      dispatch(setInfiniteMode());
    } else {
      dispatch(togglePause());
    }
  };

  const controlButtonsStyles = {
    mt: 2,
    fontSize: "1rem",
    cursor: "pointer",
  };

  const startButtonStyles = {
    px: 2.5,
    py: 1.25,
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.accent.green,
    },
  };

  const pauseButtonStyles = {
    px: 2.5,
    py: 1.25,
    borderColor: theme.palette.accent.main,
    color: theme.palette.text.primary,
    "&:hover": {
      borderColor: theme.palette.accent.green,
    },
  };

  return (
    <Box sx={controlButtonsStyles}>
      {!gameStarted && (
        <CustomButton
          variant="contained"
          onClick={handleStartGame}
          sx={startButtonStyles}
        >
          Start Game
        </CustomButton>
      )}
      {gameOver && (
        <CustomButton
          variant="contained"
          onClick={handleStartGame}
          sx={startButtonStyles}
        >
          Start New Game
        </CustomButton>
      )}
      {gameStarted && !gameOver && (
        <CustomButton
          variant="outlined"
          onClick={handlePauseResume}
          sx={pauseButtonStyles}
        >
          {win ? "Skip" : paused ? "Resume" : "Pause"}
        </CustomButton>
      )}
    </Box>
  );
};

export default ControlButtons;
