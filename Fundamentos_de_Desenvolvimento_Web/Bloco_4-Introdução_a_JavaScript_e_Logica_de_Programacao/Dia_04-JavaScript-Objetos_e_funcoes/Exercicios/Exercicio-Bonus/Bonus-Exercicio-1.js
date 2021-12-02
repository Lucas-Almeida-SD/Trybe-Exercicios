// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

function romanNumbers(string){
    let romanNumObject = {
        I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400,
        D: 500, CM: 900, M: 1000
    }
    let soma = 0;
    let romanValue;
    for (let index = 0; index < string.length; ){
        if (index < string.length - 1){
            romanValue = string.slice(index, index + 2);
            if (romanNumObject[romanValue] !== undefined){
                soma += romanNumObject[romanValue]
                index += 2;
            } else {
                soma += romanNumObject[string[index]]
                index += 1;
            }
        } else {
            soma += romanNumObject[string[index]]
            index += 1;
        }
    }
    return soma;
}

console.log(romanNumbers('MMCXIV'));
