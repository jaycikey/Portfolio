import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Box } from "@mui/material";

const FoodCount = () => {
  const foodCount = useSelector((state) => state.game.foodCount);
  const theme = useTheme();

  const foodCountStyles = {
    mt: 2,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 180,
  };

  const foodDotStyles = {
    m: 0.5,
  };

  return (
    <Box sx={foodCountStyles}>
      {Array.from({ length: 10 }).map((_, index) =>
        index < foodCount ? (
          <RadioButtonCheckedIcon
            key={index}
            sx={{ ...foodDotStyles, color: theme.palette.accent.green }}
          />
        ) : (
          <RadioButtonUncheckedIcon
            key={index}
            sx={{ ...foodDotStyles, color: theme.palette.secondary.green }}
          />
        )
      )}
    </Box>
  );
};

export default FoodCount;
