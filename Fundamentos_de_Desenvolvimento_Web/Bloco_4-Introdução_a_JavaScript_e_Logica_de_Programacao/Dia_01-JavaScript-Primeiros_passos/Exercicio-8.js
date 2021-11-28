// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .

const num1 = 3;
const num2 = 5;
const num3 = 8;

if ((num1 % 2 === 0) || (num2 % 2 === 0) || (num3 % 2 === 0)) {
    console.log(true);
} else {
    console.log(false);
}