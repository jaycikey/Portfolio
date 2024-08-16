import { createSlice } from "@reduxjs/toolkit";

const widthSlice = createSlice({
    name: 'widths',
    initialState: {
        brandWidth: 0,
        contactsWidth: 0,
    },
    reducers: {
        setBrandWidth: (state, action) => {
            state.brandWidth = action.payload;
        },
        setContactsWidth: (state, action) => {
            state.contactsWidth = action.payload;
        }
    }
});

export const { setBrandWidth, setContactsWidth } = widthSlice.actions;

export default widthSlice.reducer;