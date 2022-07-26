const sinon = require('sinon');
const { expect } = require('chai');

const movieController = require('../../controllers/movieController');
const movieService = require('../../services/movieService');

describe('Busca um filme pelo id', () => {
  const request = {};
  const response = {};

  before(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
  })

  describe('quando o valor recebido é inválido', () => {
    const erro = { code: 400, message: 'Valor inválido' };

    it('deve responder com status "400"',
      async () => {
        await movieController.getById(request, response);

        expect(response.status.calledWith(erro.code)).to.be.true;
    });

    it('deve responder com json "{ message: "Valor inválido" }"', async () => {
        await movieController.getById(request, response);

        expect(response.json.calledWith({ message: erro.message })).to.be.true;
    })
  });

  describe('quando o valor recebido é válido', () => {
    const payloadMovie = { id: 1 };

    before(() => {
      request.body = payloadMovie;
    })

    describe('quando encontra o filme', () => {
      const movie = {
        id: 1,
        title: 'title',
        directedBy: 'directedBy',
        releaseYear: 'releaseYear',
      };

      beforeEach(() => {
        sinon.stub(movieService, 'getById').resolves(movie);
      });

      afterEach(() => {
        movieService.getById.restore();
      })

      it('deve responder com status "200"',
        async () => {
          await movieController.getById(request, response);

          expect(response.status.calledWith(200)).to.be.true;
        });

      it('deve responder com json "{ id: 1, title: "title", directedBy: "directedBy", releaseYear: "releaseYear" }"',
        async () => {
          await movieController.getById(request, response);

          expect(response.json.calledWith(movie)).to.be.true;
        });
    });

    describe('quando não encontra o filme', () => {
      const erro = { code: 404, message: 'Filme não encontrado' };

      beforeEach(() => {
        sinon.stub(movieService, 'getById').resolves({ error: erro });
      });

      afterEach(() => {
        movieService.getById.restore();
      })

      it('deve responder com status "404"', async () => {
        await movieController.getById(request, response);
  
        expect(response.status.calledWith(erro.code)).to.be.true;
      });

      it('deve responder com json "{ message: "Filme não encontrado" }"', async () => {
        await movieController.getById(request, response);
  
        expect(response.json.calledWith({ message: erro.message })).to.be.true;
      });
    });
  });
})