import * as Actions from "./actions";
import initialState from "../Store/intialState";

export const GirlReducer = (state = initialState.girl, action) => {
  switch (action.type) {
    case Actions.FETCH_GIRL:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
