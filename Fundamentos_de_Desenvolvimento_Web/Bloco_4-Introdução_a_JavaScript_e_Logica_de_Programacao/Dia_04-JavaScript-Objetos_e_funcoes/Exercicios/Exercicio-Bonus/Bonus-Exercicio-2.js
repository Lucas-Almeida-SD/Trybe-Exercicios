// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.


function arrayOfNumbers(array){
    let numerosPares = [];
    for (let lists of array){
        for (let index = 0; index < lists.length; index += 1){
            if (lists[index] % 2 === 0){
                numerosPares.push(lists[index]);
            }
        }
    }
    return numerosPares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10], [11, 12, 13, 14, 15, 16]];
console.log(arrayOfNumbers(vector));