import charAPI from "../services/charAPI";

export const REQUEST_API = 'REQUEST_API';

export const GET_API = 'GET_API';

export const  FAILED_API = 'FAILED_API';

const requestAction = () => ({
  type: REQUEST_API,
});

const getAction = (data) => ({
  type: GET_API,
  payload: data,
});

const failedAction = (error) => ({
  type: FAILED_API,
  payload: error,
});

export const fetchAPI = (char) => {
  return (dispatch) => {
    dispatch(requestAction());
    return charAPI(char, getAction, failedAction, dispatch);
  }
};
