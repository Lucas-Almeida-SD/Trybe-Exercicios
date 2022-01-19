const myFizzBuzz = require('./myFizzBuzz')

describe('Teste da função myFizzBuzz', () => {
  it('Teste 1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado ("fizzbuzz")', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Teste 2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado ("fizz")', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })

  it('Teste 3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado ("buzz")', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it('Teste 4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado (número de entrada)', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })

  it('Teste 5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado (false)', () => {
    expect(myFizzBuzz('word')).toBe(false);
  })
})