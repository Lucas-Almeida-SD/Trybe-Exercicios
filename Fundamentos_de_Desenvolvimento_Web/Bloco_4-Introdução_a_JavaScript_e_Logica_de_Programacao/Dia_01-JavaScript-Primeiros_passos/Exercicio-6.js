// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'peão';
peca = peca.toLowerCase();
peca = peca.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
console.log(peca);

if(peca ==='rei' || peca === 'rainha' || peca === 'dama'){
    console.log('Horizontal, Vertical e Diagonais');
}else if(peca === 'bispo'){
    console.log('Diagonais');
}else if(peca === 'cavalo'){
    console.log('Forma de "L"');
}else if(peca === 'torre'){
    console.log('Horizontal')
}else if(peca === 'peao'){
    console.log('para frente (também captura outras peças na diagonal)');
}else{
    console.log('Peça inválida');
}