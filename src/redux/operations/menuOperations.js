import { toggleMenu, closeMenu, openMenu } from '../slices/menuSlice';

export const handleToggleMenu = () => (dispatch) => {
  dispatch(toggleMenu());
};

export const handleCloseMenu = () => (dispatch) => {
  dispatch(closeMenu());
};

export const handleOpenMenu = () => (dispatch) => {
  dispatch(openMenu());
};