import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const GameBoard = () => {
  const { snake, food } = useSelector((state) => state.game);
  const theme = useTheme();
  const gridSizeX = 11;
  const gridSizeY = 20;

  const gameBoardStyles = {
    display: "inline-block",
    border: `1px solid ${theme.palette.background.paper}`,
    background: theme.palette.background.paper,
    p: 1.25,
    borderRadius: 1.25,
  };

  const rowStyles = {
    display: "flex",
  };

  const cellStyles = (isSnake, isFood) => ({
    width: 20,
    height: 20,
    backgroundColor: isSnake
      ? theme.palette.accent.green
      : isFood
      ? theme.palette.accent.main
      : theme.palette.background.paper,
  });

  return (
    <Box sx={gameBoardStyles}>
      {Array.from({ length: gridSizeY }).map((_, rowIndex) => (
        <Box key={rowIndex} sx={rowStyles}>
          {Array.from({ length: gridSizeX }).map((_, colIndex) => {
            const isSnake = snake.some(
              (segment) => segment.x === colIndex && segment.y === rowIndex
            );
            const isFood = food.x === colIndex && food.y === rowIndex;
            return <Box key={colIndex} sx={cellStyles(isSnake, isFood)} />;
          })}
        </Box>
      ))}
    </Box>
  );
};

export default GameBoard;
