import { createSlice } from "@reduxjs/toolkit";

const gridSizeX = 11;
const gridSizeY = 20;
const initialState = {
  snake: [{ x: 5, y: 10 }],
  food: {
    x: Math.floor(Math.random() * gridSizeX),
    y: Math.floor(Math.random() * gridSizeY),
  },
  direction: { x: 0, y: -1 },
  nextDirection: { x: 0, y: -1 },
  gameOver: false,
  gameStarted: false,
  foodCount: 10,
  win: false,
  infiniteMode: false,
  paused: false,
  justAteFood: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      Object.assign(state, initialState, { gameStarted: true });
    },
    moveSnake: (state, action) => {
      state.snake = action.payload.snake;
      state.direction = action.payload.direction;
      state.gameOver = action.payload.gameOver;
      state.justAteFood = false;
    },
    eatFood: (state, action) => {
      state.food = action.payload.food;
      state.foodCount = action.payload.foodCount;
      state.win = action.payload.win;
      state.justAteFood = true;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setNextDirection: (state, action) => {
      state.nextDirection = action.payload;
    },
    togglePause: (state) => {
      state.paused = !state.paused;
      if (!state.paused) {
        state.direction = state.nextDirection;
      }
    },
    setInfiniteMode: (state) => {
      state.infiniteMode = true;
      state.win = false;
      state.foodCount = 0;
    },
    gameOver: (state) => {
      state.gameOver = true;
    },
    win: (state) => {
      state.win = true;
      state.paused = true;
      state.justAteFood = false;
    },
  },
});

export const {
  startGame,
  moveSnake,
  eatFood,
  setDirection,
  setNextDirection,
  togglePause,
  setInfiniteMode,
  gameOver,
  win,
} = gameSlice.actions;

export default gameSlice.reducer;
