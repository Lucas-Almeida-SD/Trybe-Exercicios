const myRemove = require('./myRemove')

describe('Teste da função de remoção de elementos do Array', () => {
  it('Teste 1 - remover o elemento 3 do array e retonar o array [1,2,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it('Teste 2 - remover o elemento 3 do array e não retonar o array [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Teste 3 - remover o elemento 5 do array, caso exista, e retornar o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})