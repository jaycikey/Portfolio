import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomButton from "../../shared/components/CustomButton/CustomButton";

const Contact = () => {
  const theme = useTheme();

  const contactStyles = {
    color: theme.palette.text.primary,
    p: 2,
  };

  const contactFormStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: 1,
    mt: 2,
  };

  return (
    <Box sx={contactStyles}>
      <Typography variant="h3">Contact Me</Typography>
      <Box component="form" sx={contactFormStyles}>
        <TextField
          label="Name"
          id="name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          id="email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          id="message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Box sx={buttonGroupStyles}>
          <CustomButton variant="primary">Custom BTN</CustomButton>
          <CustomButton variant="default">Custom BTN</CustomButton>
          <CustomButton variant="ghost">Custom BTN</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
