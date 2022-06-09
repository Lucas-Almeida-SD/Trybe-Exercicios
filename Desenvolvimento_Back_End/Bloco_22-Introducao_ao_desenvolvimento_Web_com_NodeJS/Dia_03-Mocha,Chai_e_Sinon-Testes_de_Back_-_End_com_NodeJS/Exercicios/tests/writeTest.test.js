const fs = require('fs');

const { expect } = require('chai');
const sinon = require('sinon');

const write = require('../write');

const content = 'VQV fazer testes!';

describe('write', () => {
  describe('Quando a escrita no arquivo acontence', () => {
    beforeEach(() => {
      sinon.stub(fs, 'writeFile').resolves();
    });

    afterEach(() => {
      fs.writeFile.restore();
    })

    it('o retorno é uma string', async () => {
      expect(await write('arquivo.txt', content)).to.be.a('string');
    });

    // it('o retorno da promise é o conteúdo de escrita do arquivo', () => {
    //   expect(await write('arquivo.txt',  content)).to.be.equals(content);
    // });

    it('o retorno é um "ok"', async () => {
      expect(await write('arquivo.txt', content)).to.be.equal('ok');
    });
  });

  describe('Quando a escrita no arquivo não acontence', () => {
    beforeEach(() => {
      sinon.stub(fs, 'writeFile').rejects();
    });

    afterEach(() => {
      fs.writeFile.restore();
    })

    it('o retorno é uma string', async () => {
      expect(await write('arquivo.txt', content)).to.be.a('string');
    });

    it('o retorno exibe a mensagem de erro "Não foi possível salvar o arquivo!"', async () => {
      const erro = 'Não foi possível salvar o arquivo!';
      expect(await write()).to.be.equal(erro);
    });
  });
})