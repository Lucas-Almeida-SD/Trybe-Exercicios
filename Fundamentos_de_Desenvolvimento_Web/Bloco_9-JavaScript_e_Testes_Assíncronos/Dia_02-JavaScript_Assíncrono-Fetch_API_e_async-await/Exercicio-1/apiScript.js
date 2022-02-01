// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const getJoke = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke)
    .catch(error => error);
  const h2 = document.getElementById('jokeContainer');
  h2.innerText = getJoke;
};

window.onload = () => fetchJoke();