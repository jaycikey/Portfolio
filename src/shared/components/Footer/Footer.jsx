import { Box, List, ListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import useBreakpoint from '../../../hooks/useBreakpoint';

const Footer = () => {
  const theme = useTheme();
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const footerStyles = {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    mt: 'auto',
    borderTop: `1px solid ${theme.palette.divider.main}`,
    color: theme.palette.text.secondary,
  };
  const findMeIn = {
    p: '0 14px',
  };

  const socialListStyles = {
    display: 'flex',
    justifyContent: isSmallScreen ? 'right' : 'center',
    flexGrow: 1,
    padding: 0,
  };

  const socialItemStyles = {
    color: 'inherit',
    borderLeft: `1px solid ${theme.palette.divider.main}`,
    borderRight: `1px solid ${theme.palette.divider.main}`,
    width: 'auto',
  };

  const secondLastItemStyles = {
    ...socialItemStyles,
    marginRight: isSmallScreen ? 0 : 'auto',
  };
  const lastItemStyles = {
    ...socialItemStyles,
    borderRight: 0,
  };

  const iconStyles = {
    fontSize: theme.typography.body2.fontSize,
  };

  return (
    <Box component="footer" sx={footerStyles}>
      <Typography variant="body2" sx={findMeIn}>
        find me in:
      </Typography>
      <List sx={socialListStyles}>
        <ListItem component="a" href="#" sx={socialItemStyles}>
          <TwitterIcon style={iconStyles} />
        </ListItem>
        <ListItem component="a" href="#" sx={secondLastItemStyles}>
          <FacebookIcon style={iconStyles} />
        </ListItem>
        <ListItem component="a" href="#" sx={lastItemStyles}>
          {!isSmallScreen && <Typography variant="body2">@jaycikey</Typography>}
          <GitHubIcon style={iconStyles} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
