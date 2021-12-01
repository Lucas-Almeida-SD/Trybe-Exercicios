// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// n = 7

//    *
//   * *
//  *   *
// *******

let n = 25;
let asterisco = '*'
let metadeDaPiramide = (n - 1) / 2;
for (let index = 0; index < metadeDaPiramide; index += 1){
    let lista = [];
    for (let jindex = 0; jindex < n; jindex += 1){
        lista.push(' ')
    }
    lista[metadeDaPiramide - index] = '*';
    lista[metadeDaPiramide + index] = '*';
    
    let linha = '';
    for (let kindex = 0; kindex < n; kindex += 1){
        linha += lista[kindex]
    }
        console.log(linha);
}
console.log('*'.repeat(n));