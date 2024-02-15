import { updateUser,updateUserNavigation } from "./actions";

export function reducer (state, action) {
    switch (action.type) {
      case updateUser:
        return {
          ...state,
          loggedUser: action.payload
        };
      case updateUserNavigation:
        return {
          ...state,
          userNavigation: action.payload
        };
      default:
        return state;
    }
  };