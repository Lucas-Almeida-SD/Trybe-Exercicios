const APIURL = 'https://anapioficeandfire.com/api/characters?name='

const charAPI = (char, getAPI, failedAPI, dispatch) => (
  fetch(`${APIURL}${char.split().join('+')}`)
    .then((response) => (response.json())
    .then((json) => dispatch(getAPI(json)))
    .catch((error) => dispatch(error))
    ))
;

export default charAPI;
