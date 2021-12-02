// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function indiceMenorValor(array){
    let menor = array[0];
    for (let number of array){
        if (number < menor){
            menor = number;
        }
    }
    let indice = array.indexOf(menor);
    return indice;
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));
