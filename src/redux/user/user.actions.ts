import { UserActions } from "./user.types";

export const setCurrentUser = (user: user) => ({
    type: UserActions.SET_CURRENT_USER,
    payload: user
})