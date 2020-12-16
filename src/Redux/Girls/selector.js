import { createSelector } from "reselect";

const GirlsSelector = (state) => state.girls;

export const getGirlName = createSelector(
  [GirlsSelector],
  (state) => state.name
);

export const getGirlAge = createSelector([GirlsSelector], (state) => state.age);
export const getGirlAddress = createSelector(
  [GirlsSelector],
  (state) => state.address
);

export const getGirlDescription = createSelector(
  [GirlsSelector],
  (state) => state.description
);

export const getGirlImage = createSelector(
  [GirlsSelector],
  (state) => state.image
);

export const getGirlLevel = createSelector(
  [GirlsSelector],
  (state) => state.level
);

export const getisReplayState = createSelector(
  [GirlsSelector],
  (state) => state.isReplay
);
