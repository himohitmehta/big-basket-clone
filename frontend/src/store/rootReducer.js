import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";
// reducers

// root reducer, all the reducers are combined here
export const rootReducer = combineReducers({
	user: userSlice,
	cart: cartSlice,
});

// redux persist configuration
const configStorage = {
	key: "root",
	storage,
	whitelist: ["user", "cart"],
};

export default persistReducer(configStorage, rootReducer);
