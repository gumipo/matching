import * as Actions from "./actions";
import initialState from "../Store/intialState";

export const GirlReducer = (state = initialState.girl, action) => {
  switch (action.type) {
    case Actions.FETCH_GIRL:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.RESET_GIRL:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.LEVEL_UP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
