import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import backgroundImage from "../../shared/assets/background.svg";

const Conteiner = ({ children }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const contentStyles = {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    maxWidth: "1024px",
    margin: "0 auto",
  };

  const backgroundStyles = {
    mt: "12px",
    mr: isMobile ? "84px" : isTablet ? "284px" : "384px",
    position: "absolute",
    top: 0,
    right: 0,
    height: "742px",
    width: "780px",
    background: `url(${backgroundImage}) no-repeat right center`,
    backgroundSize: "cover",
  };

  return (
    <Box sx={contentStyles}>
      <Box sx={backgroundStyles}></Box>
      {children}
    </Box>
  );
};

export default Conteiner;
