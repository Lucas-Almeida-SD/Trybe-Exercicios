const {encode, decode} = require('./encodeDecode');

describe('Teste das funções "encode" e "decode"', () => {
  it('Teste 1 - Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })

  it('Teste 2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  it('Teste 3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it('Teste 4 - Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(decode('06789')).toBe('06789');
  })

  it('Teste 5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('aei').length).toBe(3);
    expect(encode('12345').length).toBe(5);
  })
})