import { useEffect } from "react";
import { gameLoopOperation } from "../redux/operations/gameOperations";

const useGameLoop = (gameStarted, gameOver, win, paused, dispatch) => {
  useEffect(() => {
    if (gameStarted && !gameOver && !win && !paused) {
      const stopGameLoop = dispatch(gameLoopOperation());
      return stopGameLoop;
    }
  }, [dispatch, gameStarted, gameOver, win, paused]);
};

export default useGameLoop;
