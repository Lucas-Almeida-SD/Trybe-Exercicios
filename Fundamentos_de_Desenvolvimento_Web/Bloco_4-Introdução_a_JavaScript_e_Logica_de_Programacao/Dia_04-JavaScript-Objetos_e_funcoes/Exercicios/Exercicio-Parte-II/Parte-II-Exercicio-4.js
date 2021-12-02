// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function nomeMaior(array){
    let compareNome = array[0].length;
    let resultado;
    for (let name of array){
        if (name.length > compareNome){
            compareNome = name.length;
            resultado = name;
        }
    }
    return resultado;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
