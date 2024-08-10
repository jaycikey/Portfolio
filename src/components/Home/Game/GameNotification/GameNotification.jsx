import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GameNotification = ({ gameOver, win }) => {
  const theme = useTheme();

  if (!gameOver && !win) {
    return null;
  }

  const messageStyles = {
    position: "absolute",
    bottom: "20%",
    borderRadius: 1,
    boxShadow: "1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset",
    width: "100%",
    color: theme.palette.accent.green,
    background: theme.palette.background.default,
  };

  return (
    <Box>
      {gameOver && (
        <Typography variant="h2" sx={messageStyles}>
          GAME OVER!
        </Typography>
      )}
      {win && (
        <Typography variant="h2" sx={messageStyles}>
          WELL DONE!
        </Typography>
      )}
    </Box>
  );
};

export default GameNotification;
