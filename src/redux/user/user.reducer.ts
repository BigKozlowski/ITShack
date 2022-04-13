import { UserActions } from "./user.types";

const INITIAL_STATE: userState = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
