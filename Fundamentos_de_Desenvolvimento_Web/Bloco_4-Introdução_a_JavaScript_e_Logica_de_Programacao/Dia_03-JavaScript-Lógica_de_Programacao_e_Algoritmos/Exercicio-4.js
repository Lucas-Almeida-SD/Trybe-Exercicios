// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let n = 50;
let maior;
for (let index = 2; index < 50; index += 1){
    let count = 0;
    for (let kindex = 1; kindex <= index; kindex += 1){
        if (index % kindex === 0){
            count += 1;
        }
    }
    if (count === 2){
        maior = index;
    }
}

console.log(maior);
