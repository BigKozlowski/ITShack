import { createSelector } from "reselect";

const selectUser = (state: { user: userState }) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
