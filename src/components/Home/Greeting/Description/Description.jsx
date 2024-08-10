import React from "react";
import { Typography, useTheme, Link, Box } from "@mui/material";
import Instructions from "../../../../shared/components/Instructions/Instructions";

const Description = () => {
  const theme = useTheme();
  const githubLink = "https://github.com/jaycikey";

  const descriptionStyles = {
    mt: 2,
  };

  const linkStyles = {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    color: theme.palette.accent.main,
  };

  const pinkTextStyles = {
    color: theme.palette.accent.pink,
  };

  const greenTextStyles = {
    color: theme.palette.accent.green,
  };

  return (
    <Box sx={descriptionStyles}>
      <Instructions>
        {"Complete the game to continue."}
        {"You can also see it on my GitHub page."}
      </Instructions>
      <br />
      <Box component="span">
        <Typography component="span" sx={pinkTextStyles}>
          {`const `}
        </Typography>
        <Typography component="span" sx={greenTextStyles}>
          {`githubLink `}
        </Typography>
        {` = `}
        <Link href={githubLink} sx={linkStyles}>
          {`"${githubLink}"`}
        </Link>
      </Box>
    </Box>
  );
};

export default Description;
