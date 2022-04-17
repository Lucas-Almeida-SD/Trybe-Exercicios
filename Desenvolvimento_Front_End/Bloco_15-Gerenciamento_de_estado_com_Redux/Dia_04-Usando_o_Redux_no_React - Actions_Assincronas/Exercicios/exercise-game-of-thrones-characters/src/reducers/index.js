
import { REQUEST_API, GET_API, FAILED_API } from "../actions";

const INNITAIL_STATE = {
  loading: false,
  character: undefined,
  error: '',
}

const reducer = (state = INNITAIL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case GET_API:
      return { loading: false, character: action.payload[0], error: '' };
    case FAILED_API:
      return { loading: false, character: undefined, error: action.payload };
    default:
      return state;
  }
}



export default reducer;