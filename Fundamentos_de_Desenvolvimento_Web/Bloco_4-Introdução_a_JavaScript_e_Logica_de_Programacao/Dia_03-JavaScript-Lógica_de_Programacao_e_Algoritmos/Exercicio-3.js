// // 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 10;
let espaco = ' ';
let asterisco = '*';
let linha;
for (let index = 1; index <= n; index += 1){
    linha = espaco.repeat(n - index) + asterisco.repeat(index);
    console.log(linha);
}