import * as Actions from "./actions";
import initialState from "../Store/intialState";

export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case Actions.SAVE_USER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
