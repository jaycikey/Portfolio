import { useEffect } from "react";
import { setNextDirection } from "../redux/slices/gameSlice";

const useGameKeyHandlers = (gameStarted, gameOver, direction, dispatch) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (direction.y === 0) dispatch(setNextDirection({ x: 0, y: -1 }));
          break;
        case "ArrowDown":
          if (direction.y === 0) dispatch(setNextDirection({ x: 0, y: 1 }));
          break;
        case "ArrowLeft":
          if (direction.x === 0) dispatch(setNextDirection({ x: -1, y: 0 }));
          break;
        case "ArrowRight":
          if (direction.x === 0) dispatch(setNextDirection({ x: 1, y: 0 }));
          break;
        default:
          break;
      }
    };

    const preventArrowKeyScroll = (event) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        event.preventDefault();
      }
    };

    if (gameStarted && !gameOver) {
      document.addEventListener("keydown", handleKeyPress);
      window.addEventListener("keydown", preventArrowKeyScroll);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keydown", preventArrowKeyScroll);
    };
  }, [dispatch, gameStarted, gameOver, direction]);
};

export default useGameKeyHandlers;
