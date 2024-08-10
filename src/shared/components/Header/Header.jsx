import { Box } from "@mui/material";
import Navigation from "./Navigation/Navigation.jsx";

const Header = () => {
  const headerStyles = {
    textAlign: "center",
  };

  return (
    <Box sx={headerStyles}>
      <Navigation />
    </Box>
  );
};

export default Header;
