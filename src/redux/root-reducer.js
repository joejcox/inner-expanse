// The root reducer is code that combines all states. All reducers will go here

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// User Reducer - this is the state of the currentUser status. We will use this to check if user is logged in and get their details such as ID, name etc..
// as below - all user state will be here for the application to use. All reducer information is going to be added to one giant object courtesy of combineReducers from redux :)

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
