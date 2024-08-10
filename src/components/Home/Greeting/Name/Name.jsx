import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Name = () => {
  const theme = useTheme();

  const body1Styles = {
    color: theme.palette.secondary.green,
  };

  const nameStyles = {
    my: 1,
    maxWidth: 100,
    color: theme.palette.text.primary,
  };

  return (
    <>
      <Typography variant="body1" sx={body1Styles}>
        Hi all, I am
      </Typography>
      <Typography variant="h1" sx={nameStyles}>
        Kulzhynskyi Kostiantyn
      </Typography>
    </>
  );
};

export default Name;
