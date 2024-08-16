import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import widthReducer from './slices/widthSlice'
import menuReducer from './slices/menuSlice'

const store = configureStore({
  reducer: {
    game: gameReducer,
    width: widthReducer,
    menu: menuReducer,
  },
});

export default store;
