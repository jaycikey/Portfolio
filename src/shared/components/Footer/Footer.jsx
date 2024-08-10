import { Box, List, ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const theme = useTheme();

  const footerStyles = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: "0 15px",
    borderTop: `1px solid ${theme.palette.divider.main}`,
    color: theme.palette.text.secondary,
  };

  const socialListStyles = {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    padding: 0,
  };

  const socialItemStyles = {
    color: "inherit",
    borderLeft: `1px solid ${theme.palette.divider.main}`,
    borderRight: `1px solid ${theme.palette.divider.main}`,
    width: "auto",
  };

  const secondLastItemStyles = {
    color: "inherit",
    marginRight: "auto",
    borderRight: `1px solid ${theme.palette.divider.main}`,
    width: "auto",
  };

  const iconStyles = {
    fontSize: theme.typography.body2.fontSize,
  };

  return (
    <Box component="footer" sx={footerStyles}>
      <Typography variant="body2" sx={{ paddingRight: 2 }}>
        find me in:
      </Typography>
      <List sx={socialListStyles}>
        <ListItem component="a" href="#" sx={socialItemStyles}>
          <TwitterIcon style={iconStyles} />
        </ListItem>
        <ListItem component="a" href="#" sx={secondLastItemStyles}>
          <FacebookIcon style={iconStyles} />
        </ListItem>
        <ListItem component="a" href="#" sx={socialItemStyles}>
          <Typography variant="body2">@jaycikey</Typography>
          <GitHubIcon style={iconStyles} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
