import { Box } from "@mui/material";
import Name from "./Name/Name";
import Role from "./Role/Role";
import Description from "./Description/Description";
import useBreakpoint from "../../../hooks/useBreakpoint";

const Greeting = () => {
  const isXs = useBreakpoint("md");

  const textContainerStyles = {
    pt: `${isXs ? "96px" : "236px"}`,
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
