const functions = require('./service');
jest.mock('./service');

describe('Exercicio 1, 2 e 3 - Testes da função "randomNumber" com mocks', () => {
  afterEach(() => {
    functions.randomNumber.mockReset();
  });

  it('Exercicio 1 - Teste da função randomNumber', () => {
    functions.randomNumber = jest.fn().mockReturnValueOnce(10);
    expect(functions.randomNumber()).toBe(10);
    expect(functions.randomNumber).toHaveBeenCalled();
    expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Exercicio 2 - Crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez', () => {
    functions.randomNumber.mockImplementationOnce((n1, n2) => n1 / n2);
    expect(functions.randomNumber(10, 2)).toBe(5);
    expect(functions.randomNumber).toHaveBeenCalled();
    expect(functions.randomNumber).toHaveBeenCalledTimes(1);
    expect(functions.randomNumber(10,2)).toBe(undefined);
  });

  it('Exercicio 3 - Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
    functions.randomNumber.mockImplementationOnce((n1, n2, n3) => n1 * n2 * n3);
    expect(functions.randomNumber(1, 2, 4)).toBe(8);
    expect(functions.randomNumber).toHaveBeenCalled();
    expect(functions.randomNumber).toHaveBeenCalledWith(1, 2, 4);
    expect(functions.randomNumber).toHaveBeenCalledTimes(1);
    expect(functions.randomNumber(1, 2, 4)).toBe(undefined);

    functions.randomNumber.mockReset();

    functions.randomNumber.mockImplementation((n1) => n1 * 2);
    expect(functions.randomNumber(7)).toBe(14);
    expect(functions.randomNumber(20)).toBe(40);
    expect(functions.randomNumber).toHaveBeenCalledTimes(2);
  });
})

describe('Exercicio 4 - Testes das funções convertToUpperCase, returnFirstLetter, joinStrings', () => {
  it('Testes das funções com mocks', () => {
    functions.convertToUpperCase.mockImplementation((string) => string.toLowerCase());
    functions.returnFirstLetter.mockImplementation((string) => string[string.length - 1]);
    functions.joinStrings.mockImplementation((string1, string2, string3) =>
      `${string1}${string2}${string3}`);

    expect(functions.convertToUpperCase('LUCAS')).toBe('lucas');
    expect(functions.convertToUpperCase).toHaveBeenCalled();
    expect(functions.convertToUpperCase).toHaveBeenCalledTimes(1);
    expect(functions.returnFirstLetter('LUCAS')).toBe('S');
    expect(functions.returnFirstLetter).toHaveBeenCalled();
    expect(functions.returnFirstLetter).toHaveBeenCalledTimes(1);
    expect(functions.joinStrings('lucas','almeida','diniz')).toBe('lucasalmeidadiniz');
    expect(functions.joinStrings).toHaveBeenCalled();
    expect(functions.joinStrings).toHaveBeenCalledTimes(1);

    functions.convertToUpperCase.mockRestore();
    expect(functions.convertToUpperCase('LUCAS')).toBe(undefined);
  })
});

describe('Exercicio 5 - Testes da função dogPictures', () => {
  it('Mocke a requisição e crie os testes', async () => {
    functions.dogPicturesAPI.mockResolvedValueOnce('request sucess');
    await expect(functions.dogPicturesAPI()).resolves.toBe('request sucess');
    expect(functions.dogPicturesAPI).toHaveBeenCalled();
    expect(functions.dogPicturesAPI).toHaveBeenCalledTimes(1);

    functions.dogPicturesAPI.mockResolvedValueOnce('request failed');
    await expect(functions.dogPicturesAPI()).resolves.toBe('request failed');
    expect(functions.dogPicturesAPI).toHaveBeenCalledTimes(2);
  })
})