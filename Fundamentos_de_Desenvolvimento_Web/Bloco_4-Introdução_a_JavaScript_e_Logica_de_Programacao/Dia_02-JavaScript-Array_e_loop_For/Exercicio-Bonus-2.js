// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let trocarPosicao;

for (let i = 0; i < numbers.length; i += 1){
    for (let j = i + 1; j < numbers.length; j += 1){
        if (numbers[j] > numbers[i]){
            trocarPosicao = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = trocarPosicao
        }
    }
}
console.log(numbers);
