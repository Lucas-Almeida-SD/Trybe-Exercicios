// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

//   5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

function nomeCompletoMoradores(objectMoradores){
    let count = 1;
    for (let bloco in objectMoradores){
        console.log('Bloco ' + count);
        for (let morador of objectMoradores[bloco]){
            console.log(morador.nome + ' ' + morador.sobrenome);
        }
        count += 1;
        console.log('\n');
    }
}

nomeCompletoMoradores(moradores);