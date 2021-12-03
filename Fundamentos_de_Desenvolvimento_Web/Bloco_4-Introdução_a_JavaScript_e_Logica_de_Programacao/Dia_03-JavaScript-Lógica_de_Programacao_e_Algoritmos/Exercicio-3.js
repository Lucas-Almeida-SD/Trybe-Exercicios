// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


let qtdeDeCaractereDaMaiorPalavra = array[0].length;
let maioresPalavras = [];
for (let word of array){
    if (word.length > qtdeDeCaractereDaMaiorPalavra){
        qtdeDeCaractereDaMaiorPalavra = word.length;
    }
}
for (let word of array){
    if (word.length === qtdeDeCaractereDaMaiorPalavra){
        maioresPalavras.push(word)
    }
}
console.log('Maior(es) palavra(s): ' + maioresPalavras);


//////////////////////////////////////////////////////////////////

let qtdeDeCaractereDaMenorPalavra = array[0].length;
let menoresPalavras = [];
for (let word of array){
    if (word.length < qtdeDeCaractereDaMaiorPalavra){
        qtdeDeCaractereDaMenorPalavra = word.length;
    }
}
for (let word of array){
    if (word.length === qtdeDeCaractereDaMenorPalavra){
        menoresPalavras.push(word)
    }
}
console.log('Menor(es) palavra(s): ' + menoresPalavras);
