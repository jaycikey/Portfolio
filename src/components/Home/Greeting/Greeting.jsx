import { Box } from "@mui/material";
import Name from "./Name/Name";
import Role from "./Role/Role";
import Description from "./Description/Description";

const Greeting = () => {
  const textContainerStyles = {
    pt: "236px",
    pl: "302px",
  };

  return (
    <Box sx={textContainerStyles}>
      <Name />
      <Role />
      <Description />
    </Box>
  );
};

export default Greeting;
