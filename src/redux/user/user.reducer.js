import { UserActionTypes } from "./user.types";
// A reducer is a function that gets 2 proprties (a state object which represents the last state or initial state) and it receives an action (an object which has a string value for a type so that we can write cases and tell the reducer what to do based on the action type)

const INITIAL_STATE = {
  currentUser: null,
};

// state will be something that th redux store passes to this reducer, the action will be which of our actions we which to use on this state information. Make sure there is initial state otherwise the action will have nothing to action. Here we have set the default state to the currentUser property.
const userReducer = (state = INITIAL_STATE, action) => {
  // We will use a switch statement to find what action type is firing. Set a default of state incase the action type isn't what we want.
  switch (action.type) {
    // These names are based on the name we have given our actions
    case UserActionTypes.SET_CURRENT_USER:
      // here will spread out the state but extract the currentUser as we only want to set this. Everything else will stay the same
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
