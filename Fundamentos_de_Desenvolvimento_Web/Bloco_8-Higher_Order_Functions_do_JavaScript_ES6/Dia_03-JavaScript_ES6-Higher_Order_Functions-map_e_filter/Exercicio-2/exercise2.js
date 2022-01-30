function nameAndAge(array) {
  // escreva seu código aqui
  const newArray = array.map((element) => { 
    return { age: element.releaseYear - element.author.birthYear, author: element.author.name };
  });
  newArray.sort((element1, element2) => element1.age - element2.age);
  return newArray;
}

module.exports = nameAndAge;
