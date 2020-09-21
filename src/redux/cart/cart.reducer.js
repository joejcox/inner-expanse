import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  numItemsInCart: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART_DISPLAY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        numItemsInCart: state.numItemsInCart + 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
