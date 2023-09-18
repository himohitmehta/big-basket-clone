import { createSlice } from "@reduxjs/toolkit";
import {
	handleAddToCart,
	handleReduceCartItem,
	handleRemoveCartItem,
} from "./cart.utils";

const initialState = {
	cartItems: [],
};

// cart slice for storing the cart data
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// action for adding the product to cart
		addProductToCart: (state, action) => {
			state.cartItems = handleAddToCart({
				prevCartItems: state.cartItems,
				nextCartItem: action.payload,
			});
		},
		// action for reducing the product quantity from cart
		reduceCartItem: (state, action) => {
			state.cartItems = handleReduceCartItem({
				prevCartItems: state.cartItems,
				cartItemToReduce: action.payload,
			});
		},
		// action for removing the product from cart
		removeCartItem: (state, action) => {
			state.cartItems = handleRemoveCartItem({
				prevCartItems: state.cartItems,
				cartItemToRemove: action.payload,
			});
		},
		// action for clearing the cart
		clearCart: (state, action) => {
			return initialState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addProductToCart, clearCart, reduceCartItem, removeCartItem } =
	cartSlice.actions;

export default cartSlice.reducer;