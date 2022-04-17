export const REQUEST_API = 'REQUEST_API';
export const GET_API = 'GET_API';
export const FAILED_API = 'FAILED_API';

const requestAction = () => ({
  type: REQUEST_API,
});

const getAction = (payload) => ({
  type: GET_API,
  payload,
});

const failedAction = () => ({
  type: FAILED_API,
  payload: true,
});

export const fetchApi = (query) => {
  return (dispatch) => {
    dispatch(requestAction());
    const url = `https://www.reddit.com/r/${query}.json`
    return fetch(url)
      .then((responde) => responde.json())
      .then((data) => dispatch(getAction(data.data.children)))
      .catch(() => dispatch(failedAction()))
  }
}
