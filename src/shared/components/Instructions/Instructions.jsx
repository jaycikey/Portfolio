import React from "react";
import { Box, Typography } from "@mui/material";

const Instructions = ({ children }) => {
  const instructionsStyles = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  };

  return (
    <Box sx={instructionsStyles}>
      {React.Children.map(children, (child) => (
        <Typography variant="caption" key={child.toString()}>
          // {child}
        </Typography>
      ))}
    </Box>
  );
};

export default Instructions;
