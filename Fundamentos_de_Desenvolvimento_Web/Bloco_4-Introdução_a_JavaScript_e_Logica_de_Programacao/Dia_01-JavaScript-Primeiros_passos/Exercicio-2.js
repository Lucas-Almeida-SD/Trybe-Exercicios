//Faça um programa que retorne o maior de dois números. Defina no começo do programa 
//duas constantes com os valores que serão comparados.
const a = 70;
const b = 90;
let maior;
if(a > b){
    maior = a;
}else if(b > a){
    maior = b;
}else{
    maior = 'a = b = ' + String(a)
}
console.log(maior);
