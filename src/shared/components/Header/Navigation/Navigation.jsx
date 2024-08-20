import { Link, useLocation } from 'react-router-dom';
import {
  useTheme,
  Drawer,
  IconButton,
  ListItemButton,
  Box,
  Typography,
  List,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { updateBrandWidth } from '../../../../redux/operations/widthOperation';
import {
  handleToggleMenu,
  handleCloseMenu,
} from '../../../../redux/operations/menuOperations';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import Footer from '../../Footer/Footer';

const Navigation = () => {
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const brandRef = useRef(null);

  const isMenuOpen = useSelector(state => state.menu.isMenuOpen);
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const links = [
    { to: '/', label: '_hello' },
    { to: '/about', label: '_about-me' },
    { to: '/projects', label: '_projects' },
    { to: '/contact', label: '_contact-me' },
  ];

  const navStyles = {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.divider.main}`,
    fontFamily: theme.typography.fontFamily,
    alignItems: 'center',
  };

  const brandNameStyles = {
    color: theme.palette.text.secondary,
    mr: isSmallScreen ? 'auto' : '18px',
    p: '0 14px',
  };

  const iconStyles = {
    color: theme.palette.text.secondary,
  };

  const navListStyles = {
    display: 'flex',
    flexGrow: 1,
    borderRight: `1px solid ${theme.palette.divider.main}`,
    alignItems: 'center',
  };

  const navItemStyles = (isActive, isLastItem) => ({
    p: '14px 14px',
    borderLeft: `1px solid ${theme.palette.divider.main}`,
    borderRight: isLastItem
      ? `1px solid ${theme.palette.divider.main}`
      : 'none',
    color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
    mr: isLastItem ? 'auto' : 0,
  });

  useEffect(() => {
    const updateWidth = () => {
      if (brandRef.current) {
        const computedStyle = window.getComputedStyle(brandRef.current);
        const width = brandRef.current.offsetWidth;
        const paddingLeft = parseFloat(computedStyle.paddingLeft);
        const paddingRight = parseFloat(computedStyle.paddingRight);
        const borderLeft = parseFloat(computedStyle.borderLeftWidth);
        const borderRight = parseFloat(computedStyle.borderRightWidth);
        const totalWidth =
          width + paddingLeft + paddingRight + borderLeft + borderRight;
        dispatch(updateBrandWidth(totalWidth));
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [dispatch]);

  return (
    <Box component="nav" sx={navStyles}>
      <Typography ref={brandRef} component="p" sx={brandNameStyles}>
        kulzhynskyi-kostiantyn
      </Typography>
      {isSmallScreen ? (
        <>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(handleToggleMenu())}
          >
            <MenuIcon sx={iconStyles} />
          </IconButton>
          <Drawer
            anchor="right"
            open={isMenuOpen}
            onClose={() => dispatch(handleCloseMenu())}
          >
            <Box sx={{ width: '100vw', p: 2 }}>
              <IconButton
                onClick={() => dispatch(handleCloseMenu())}
                sx={{ mb: 2, ...iconStyles }}
              >
                <CloseIcon />
              </IconButton>
              <List>
                {links.map(link => (
                  <ListItemButton
                    key={link.to}
                    onClick={() => dispatch(handleCloseMenu())}
                  >
                    <Link
                      to={link.to}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  </ListItemButton>
                ))}
              </List>
            </Box>
            <Footer />
          </Drawer>
        </>
      ) : (
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
                <Link to={link.to} style={{ color: 'inherit' }}>
                  {link.label}
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Navigation;
