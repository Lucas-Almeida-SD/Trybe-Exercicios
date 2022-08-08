const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');
const { User } = require('../models');

chai.use(chaiHttp);

const { expect } = chai;


describe('Rota "GET /api/users/:userId"', () => {

  describe('Consulta uma pessoa usuária', () => {
    
    describe('A requisição GET para a rota não possui token de autenticação', () => {
      let response;
      
      before(async () => {
        response = await chai.request(server).get('/api/users/1');
      });
  
      describe('Não obtém os dados do user', () => {
  
        it('Retorna status 400 - Bad Request ', () => {
          expect(response).to.have.status(400)
        })
  
        it('Retorna mensagem erro "Token não encontrado ou informado"', () => {
          const errorMessage =  'Token não encontrado ou informado';
  
          expect(response.body.message).to.be.equal(errorMessage);
        })
      })
    });

    describe('A requisição GET para a rota não é autorizada', () => {
      let responseLogin;
      let responseUser;

      const headers = {};

      const loginUserRequest = {
        username: 'lucas',
        password: 'senha123'
      };

      const loginUserResponse = {
        id: 1,
        username: 'lucas',
        password: 'senha123'
      };

      const userId = 2;

      before(() => {
        sinon.stub(User, 'findOne').resolves(loginUserResponse);
      });

      after(() => { 
        User.findOne.restore();
      });

      describe('Não obtém os dados do user', () => {

        before(async () => {
          responseLogin = await chai.request(server).post('/api/login').send(loginUserRequest);

          const { token } = responseLogin.body;
          headers.authorization = token;
  
          responseUser = await chai.request(server).get(`/api/users/${userId}`).set(headers);
        });

        it('Retorna status 401 - Unauthorized', () => {
          expect(responseUser).to.have.status(401);
        });

        it('Retorna mensagem erro "Acesso negado', () => {
          const errorMessage =  'Acesso negado';

          expect(responseUser.body.message).to.be.equal(errorMessage);
        });
      });
    });

    describe('A requisição GET para a rota é autorizada', () => {
      let responseLogin;
      let responseUser;

      const loginUserRequest = {
        username: 'lucas',
        password: 'senha123'
      };

      const userResponse = {
        id: 1,
        username: 'lucas',
        password: 'senha123'
      };

      const userId = 1;

      before(() => {
        sinon.stub(User, 'findOne').resolves(userResponse);
        sinon.stub(User, 'findByPk').resolves(userResponse);
      });

      after(() => { 
        User.findOne.restore();
        User.findByPk.restore();
      });

      describe('Obtém os dados do user', () => {

        before(async () => {
          responseLogin = await chai.request(server).post('/api/login').send(loginUserRequest);

          const { token } = responseLogin.body;
          const headers = { authorization: token };
  
          responseUser = await chai.request(server).get(`/api/users/${userId}`).set(headers);
        });

        it('Retorna status 200 - OK', () => {
          expect(responseUser).to.have.status(200);
        });

        it('Retorna um objeto com os dados do user', () => {
          expect(responseUser.body).to.be.eqls(userResponse);
        });
      });
    });
    
  });
});