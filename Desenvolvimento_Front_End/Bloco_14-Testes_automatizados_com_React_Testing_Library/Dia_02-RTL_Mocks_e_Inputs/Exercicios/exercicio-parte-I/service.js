const fetch = require('node-fetch');

const randomNumber = () => {
  return (Math.floor(Math.random() * 101))
}

const convertToUpperCase = (string) => { 
  return string.toUpperCase();
  }

const returnFirstLetter = (string) => string[0];

const joinStrings = (string1, string2) => `${string1}${string2}`;

const dogPicturesAPI = () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  return (
    fetch(url)
    .then((response) => response.json())
    .then((data) => data.message)
  );
}

module.exports = {
  randomNumber,
  convertToUpperCase,
  returnFirstLetter,
  joinStrings,
  dogPicturesAPI,
};
