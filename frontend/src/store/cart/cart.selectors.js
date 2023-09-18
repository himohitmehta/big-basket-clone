import { createSelector } from "reselect";

// selector for selecting cart data from store
export const selectCartData = (state) => state.cart;

// selector for selecting cart items from store
export const selectCartItems = createSelector(
	[selectCartData],
	(cart) => cart.cartItems,
);

// selector for selecting cart items count from store
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(quantity, cartItem) => quantity + cartItem.quantity,
			0,
		),
);

// selector for selecting cart items total from store
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(quantity, cartItem) =>
			quantity + cartItem.quantity * cartItem.selling_price,
		0,
	),
);
