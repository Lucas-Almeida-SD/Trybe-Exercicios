const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('checkNumber', () => {
  describe('Verifica se o conteúdo', () => {
    it('É um number positivo', () =>  {
      expect(checkNumber(1)).to.be.equal('positivo');
    });
  
    it('É um number negativo', () =>  {
      expect(checkNumber(-1)).to.be.equal('negativo');
    });
  
    it('É um number neutro', () =>  {
      expect(checkNumber(0)).to.be.equal('neutro');
    });
  
    it('Não é um number', () =>  {
      expect(checkNumber('0')).to.be.equal('o valor deve ser um número');
    });
  });
});