// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(word){
    let count = 0;
    word = word.toLowerCase();
    for (let index = 0; index < word.length; index += 1){
        if (word[index] === word[word.length - 1 - index]){
            return true;
        } else {
            return false;
        }
    }
}

console.log(verificaPalindrome('Hannah'));