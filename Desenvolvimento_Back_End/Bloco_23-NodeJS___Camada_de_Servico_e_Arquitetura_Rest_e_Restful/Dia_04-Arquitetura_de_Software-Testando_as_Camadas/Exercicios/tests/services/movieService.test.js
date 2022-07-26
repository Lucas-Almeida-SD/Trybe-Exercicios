const sinon = require('sinon');
const { execute, expect } = require('chai');
const generateError = require('../../helpers/generateError');

const movieService = require('../../services/movieService');
const movieModel = require('../../models/movieModel');

describe('Busca um filme pelo id', () => {
  const payloadMovie = { id: 1 };

  describe('quando o valor recebido é inválido', () => {
    const erro = generateError(400, 'Valor inválido');

    it('retorna objeto de erro "{ error: { code: 400,  message: "Valor inválido"} }"', 
      async () => {
        const response = await movieService.getById({});

        expect(response).to.be.eql(erro);
    })
  })

  describe('quando o valor recebido é válido', () => {

    describe('quando encontra o filme', () => {
      beforeEach(() => {
        const movie = {
          id: 1,
          title: 'title',
          directedBy: 'directedBy',
          releaseYear: 'releaseYear',
        };

        sinon.stub(movieModel, 'getById').resolves(movie);
      });

      afterEach(() => {
        movieModel.getById.restore();
      });
      
      it('retorna um objeto', async () => {
        const response = await movieService.getById(payloadMovie);
  
        expect(response).to.be.an('object');
      })
  
      it('objeto deve possuir as propriedades: id, title, directedBy, releaseYear', async () => {
        const response = await movieService.getById(payloadMovie);
  
        expect(response).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
      });
    })

    describe('quando não encontra o filme', () => {
      const erro = generateError(404, 'Filme não encontrado');

      beforeEach(() => {
        sinon.stub(movieModel, 'getById').resolves(erro);
      });

      afterEach(() => {
        movieModel.getById.restore();
      });

      it('retorna objeto de erro "{ error: { code: 404,  message: "Filme não encontrado"} }"',
        async () => {
        const response = await movieService.getById(payloadMovie);

        expect(response).to.be.eql(erro);
      })
    })
  })
})