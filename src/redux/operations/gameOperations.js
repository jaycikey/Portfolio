import { moveSnake, eatFood, gameOver, win } from "../slices/gameSlice";

const gridSizeX = 11;
const gridSizeY = 20;
const intervalTime = 200;

export const startGameOperation = () => (dispatch) => {
  dispatch(startGame());
};

export const moveSnakeOperation = () => (dispatch, getState) => {
  const state = getState().game;
  const newSnake = [...state.snake];
  const head = {
    x: newSnake[0].x + state.nextDirection.x,
    y: newSnake[0].y + state.nextDirection.y,
  };

  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= gridSizeX ||
    head.y >= gridSizeY ||
    newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    dispatch(gameOver());
    return;
  }

  newSnake.unshift(head);

  if (head.x === state.food.x && head.y === state.food.y) {
    const newFoodCount = Math.max(state.foodCount - 1, 0);
    dispatch(
      eatFood({
        food: {
          x: Math.floor(Math.random() * gridSizeX),
          y: Math.floor(Math.random() * gridSizeY),
        },
        foodCount: newFoodCount,
        win: newFoodCount === 0 && !state.infiniteMode,
      })
    );
  } else {
    newSnake.pop();
  }

  dispatch(
    moveSnake({
      snake: newSnake,
      direction: state.nextDirection,
      gameOver: false,
    })
  );

  if (state.justAteFood && state.win) {
    dispatch(win());
  }
};

export const gameLoopOperation = () => (dispatch, getState) => {
  const interval = setInterval(() => {
    const state = getState().game;
    if (state.gameOver || !state.gameStarted || state.win || state.paused) {
      clearInterval(interval);
      return;
    }
    dispatch(moveSnakeOperation());
  }, intervalTime);

  return () => clearInterval(interval);
};
