const sum = require('./sum');

describe('Teste da função de soma de dois valores', () => {
  test('Teste 1 - Soma de 4 e 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  test('Teste 2 - Soma de 0 e 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  test('Teste 3 - Verifica se algum dos parametros não é do tipo number', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  })
})