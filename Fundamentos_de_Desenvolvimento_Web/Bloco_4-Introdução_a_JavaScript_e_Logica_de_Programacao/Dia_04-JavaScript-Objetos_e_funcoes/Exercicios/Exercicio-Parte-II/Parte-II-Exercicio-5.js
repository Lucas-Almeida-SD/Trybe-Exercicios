// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function numeroQueMaisRepete(array){
    let listaDeNumeros = [];
    let listaDeVezes = [];
    for (let element of array){
        if (listaDeNumeros.indexOf(element) === -1){
            let count = 0;
            for (let index = 0; index < array.length; index += 1){
                if (element === array[index]){
                    count += 1;
                }
            }
            listaDeNumeros.push(element);
            listaDeVezes.push(count)
        }
    }
    let maior = listaDeVezes[0];
    for (number of listaDeVezes){
        if (number > maior){
            maior = number;
        }
    }
    let index = listaDeVezes.indexOf(maior);
    return listaDeNumeros[index];
}

console.log(numeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));