import { useDispatch, useSelector } from "react-redux";
import { setNextDirection } from "../../../../redux/slices/gameSlice";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowKeys = () => {
  const dispatch = useDispatch();
  const { direction, paused } = useSelector((state) => state.game);
  const theme = useTheme();

  const handleDirectionChange = (newDirection) => {
    if (!paused) {
      switch (newDirection) {
        case "up":
          if (direction.y === 0) dispatch(setNextDirection({ x: 0, y: -1 }));
          break;
        case "down":
          if (direction.y === 0) dispatch(setNextDirection({ x: 0, y: 1 }));
          break;
        case "left":
          if (direction.x === 0) dispatch(setNextDirection({ x: -1, y: 0 }));
          break;
        case "right":
          if (direction.x === 0) dispatch(setNextDirection({ x: 1, y: 0 }));
          break;
        default:
          break;
      }
    }
  };

  const arrowKeysStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 2, // theme.spacing(2)
  };

  const arrowRowStyles = {
    display: "flex",
  };

  const arrowStyles = {
    width: "48px",
    height: "28px",
    m: 0.5,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider.main}`,
    boxShadow: "0px 4px 4px rgba(30, 45, 61, 0.25)",
  };

  return (
    <Box sx={arrowKeysStyles}>
      <Box sx={arrowRowStyles}>
        <Box sx={arrowStyles} onClick={() => handleDirectionChange("up")}>
          <ArrowUpwardIcon />
        </Box>
      </Box>
      <Box sx={arrowRowStyles}>
        <Box sx={arrowStyles} onClick={() => handleDirectionChange("left")}>
          <ArrowBackIcon />
        </Box>
        <Box sx={arrowStyles} onClick={() => handleDirectionChange("down")}>
          <ArrowDownwardIcon />
        </Box>
        <Box sx={arrowStyles} onClick={() => handleDirectionChange("right")}>
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default ArrowKeys;
