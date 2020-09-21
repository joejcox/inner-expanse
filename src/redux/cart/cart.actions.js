import { CartActionTypes } from "./cart.types";

export const setCartDisplay = () => ({
  type: CartActionTypes.SET_CART_DISPLAY,
});

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = () => ({
  type: CartActionTypes.REMOVE_FROM_CART,
});
