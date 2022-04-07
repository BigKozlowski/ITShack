import { UserActions } from "./user.types";

export const setCurrentUser = (user: User) => ({
    type: UserActions.SET_CURRENT_USER,
    payload: user
})