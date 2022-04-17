import { REQUEST_API, GET_API, FAILED_API } from "../actions/apiAction";

const INNITIAL_STATE = {
  isFetching: false,
  posts: [],
  error: false,
}

const reducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, isFetching: true };
    case GET_API:
      return { ...state, isFetching: false, posts: action.payload, error: false };
    case FAILED_API:
      return { ...state, isFetching: false, error: true };
    default:
      return state;
  }
}

export default reducer;
