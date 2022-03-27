import { FILTER_BUTTONS } from "../actions/filterButtons";

const INNITIAL_STATE = 'espera';

const filterButtonsReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BUTTONS:
      return action.filter;
    default:
      return state;
  }
}

export default filterButtonsReducer;
