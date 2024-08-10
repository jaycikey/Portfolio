import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Role = () => {
  const theme = useTheme();
  const roleStyles = {
    color: theme.palette.secondary.purple,
  };

  return (
    <Typography variant="h2" sx={roleStyles}>
      &gt; Front-end developer
    </Typography>
  );
};

export default Role;
