import { IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../../../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleToggleMenu,
  handleCloseMenu,
} from '../../../../../redux/operations/menuOperations';
import NavLinks from '../NavLinks/NavLinks';

const MenuToggle = ({ links, iconStyles }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(state => state.menu.isMenuOpen);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        aria-expanded={isMenuOpen}
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
          <NavLinks
            links={links}
            isSmallScreen={true}
            handleLinkClick={() => dispatch(handleCloseMenu())}
          />
        </Box>
        <Footer />
      </Drawer>
    </>
  );
};

export default MenuToggle;
