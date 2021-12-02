// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function indeceMaiorValor (array){
    let maior = array[0];
    for (let index = 0; index < array.length; index += 1){
        if (array[index] > maior){
            maior = array[index];
        }
    }
    let indice = array.indexOf(maior);
    return indice;
}

console.log(indeceMaiorValor([2, 3, 6, 7, 10, 1]));