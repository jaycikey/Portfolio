import { setBrandWidth, setContactsWidth } from "../slices/widthSlice";

export const updateBrandWidth = (width) => (dispatch) => { dispatch(setBrandWidth(width)) }

export const updateContactsWidth = (width) => (dispatch) => { dispatch(setContactsWidth(width)) }