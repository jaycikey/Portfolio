import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Navigation = () => {
  const location = useLocation();
  const theme = useTheme();

  const links = [
    { to: "/", label: "_hello" },
    { to: "/about", label: "_about-me" },
    { to: "/projects", label: "_projects" },
    { to: "/contact", label: "_contact-me" },
  ];

  const navStyles = {
    display: "flex",
    borderBottom: `1px solid ${theme.palette.divider.main}`,
    fontFamily: theme.typography.fontFamily,
  };

  const brandNameStyles = {
    color: theme.palette.text.secondary,
    p: "15px",
    mr: "32px",
  };

  const navListStyles = {
    display: "flex",
    flexGrow: 1,
    borderRight: `1px solid ${theme.palette.divider.main}`,
    p: 0,
    m: 0,
    listStyle: "none",
  };

  const navItemStyles = (isActive, isLastItem) => ({
    p: "15px 32px",
    borderLeft: `1px solid ${theme.palette.divider.main}`,
    borderRight: isLastItem
      ? `1px solid ${theme.palette.divider.main}`
      : "none",
    color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
    mr: isLastItem ? "auto" : 0,
  });

  return (
    <Box component="nav" sx={navStyles}>
      <Typography component="p" sx={brandNameStyles}>
        kulzhynskyi-kostiantyn
      </Typography>
      <Box component="ul" sx={navListStyles}>
        {links.map((link, index) => {
          const isActive = location.pathname === link.to;
          const isLastItem = index === links.length - 2;
          return (
            <Box
              component="li"
              key={link.to}
              sx={navItemStyles(isActive, isLastItem)}
            >
              <Link to={link.to} style={{ color: "inherit" }}>
                {link.label}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navigation;
