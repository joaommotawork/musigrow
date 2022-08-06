import { createSlice } from '@reduxjs/toolkit';

export interface ReactBurgerMenuState {
	isOpen: boolean;
}

const initialState: ReactBurgerMenuState = {
	isOpen: false,
};

export const reactBurgerMenuSlice = createSlice({
	name: 'reactBurgerMenu',
	initialState,
	reducers: {
		openMenu: (state) => {
			state.isOpen = true;
		},
		closeMenu: (state) => {
			state.isOpen = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu } = reactBurgerMenuSlice.actions;

export default reactBurgerMenuSlice.reducer;
