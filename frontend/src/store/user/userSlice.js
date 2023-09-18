import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
		signOutUser(state) {
			state.currentUser = {};
		},
	},
});

export const { setCurrentUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
