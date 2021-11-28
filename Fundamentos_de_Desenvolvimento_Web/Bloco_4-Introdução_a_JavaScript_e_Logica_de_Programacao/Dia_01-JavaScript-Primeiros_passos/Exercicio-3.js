// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const b = 51;
const c = 37;
const a = 70;
let maior;

if (a > b && a > c){
    maior = a;
}else if (b > a && b > c){
    maior = b;
}else{
    maior = c;
}
console.log(maior);