// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 25;
let asterisco = '*';
let espaco = ' ';
let linha;
for (let index = 1; index <= n; index += 2){
    linha = espaco.repeat((n - index) / 2) + asterisco.repeat(index);
    console.log(linha);
}