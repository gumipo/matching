import { createSelector } from "reselect";

const UserSelector = (state) => state.user;

export const getUserName = createSelector(
  [UserSelector],
  (state) => state.name
);
export const getUserImage = createSelector(
  [UserSelector],
  (state) => state.image
);
