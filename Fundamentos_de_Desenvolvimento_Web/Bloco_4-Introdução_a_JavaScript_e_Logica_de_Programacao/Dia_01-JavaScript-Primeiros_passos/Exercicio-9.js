// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const num1 = 3;
const num2 = 6;
const num3 = 8;

if ((num1 % 2 === 1) || (num2 % 2 === 1) || (num3 % 2 === 1)) {
    console.log(true);
} else {
    console.log(false);
}