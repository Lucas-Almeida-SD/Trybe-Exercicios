const sinon = require('sinon');
const { expect } = require('chai');

const movieModel = require('../../models/movieModel');
const connection = require('../../helpers/connection');

describe('Busca um filme pelo id', () => {
  const payloadMovie = { id: 1 };
  
  describe('quando encontra o filme', () => {
    beforeEach(() => {
      const execute = [[{
        id: 1,
        title: 'title',
        directedBy: 'directedBy',
        releaseYear: 'releaseYear',
      }]];
  
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });
    
    it('retorna um objeto', async () => {
      const response = await movieModel.getById(payloadMovie);

      expect(response).to.be.an('object');
    })

    it('objeto deve possuir as propriedades: id, title, directedBy, releaseYear', async () => {
      const response = await movieModel.getById(payloadMovie);

      expect(response).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });

  describe('quando não encontra o filme', () => {
    const execute = [[]];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(execute);
    });

    afterEach(() => {
      connection.execute.restore();
    })

    it('deve retornar undefined', async () => {
      const response = await movieModel.getById(payloadMovie);
      
      expect(response).to.be.undefined;
    })
  })
});