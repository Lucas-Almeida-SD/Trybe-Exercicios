const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Teste da função uppercase', () => {
  it('Verifica se a função retorna', (done) => {
    uppercase('lucas', (result) => {
      try {
        expect(result).toBe('LUCAS');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})