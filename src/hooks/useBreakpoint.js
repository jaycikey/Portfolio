import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const useBreakpoint = (breakpoint1, breakpoint2) => {
  const theme = useTheme();

  if (breakpoint2) {
    return useMediaQuery(theme.breakpoints.between(breakpoint1, breakpoint2));
  } else {
    return useMediaQuery(theme.breakpoints.down(breakpoint1));
  }
}

export default useBreakpoint;