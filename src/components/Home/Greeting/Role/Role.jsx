import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useBreakpoint from "../../../../hooks/useBreakpoint";

const Role = () => {
  const theme = useTheme();
  const isXs = useBreakpoint('md');

  const roleStyles = {
    color: isXs ? theme.palette.accent.green : theme.palette.secondary.purple,
    fontSize: isXs ? 20 : theme.typography.h2,
  };

  return (
    <Typography variant="h2" sx={roleStyles}>
      &gt; Front-end developer
    </Typography>
  );
};

export default Role;
