const { expect } = require('@jest/globals');
const searchEmployee = require('./searchEmployee');

describe('Teste da função searchEmployee', () => {
  it ('Teste 1 - Verificar se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  })

  it ('Teste 2 - Verificar se o tipo da função é "function"', () => {
    expect(typeof searchEmployee).toBe('function');
  })

  it ('Teste 3 - Inserir o "id: 5842-2" e "detail: street" e retornar "ID não identificada"', () => {
    expect(searchEmployee('5842-2', 'street')).toBe('ID não identificada');
  })

  it ('Teste 4 - Inserir o "id: 4456-4" e "detail: school" e retornar "Informação indisponível"', () => {
    expect(searchEmployee('4456-4', 'school')).toBe('Informação indisponível');
  })

  it ('Teste 5 - Verificar alguns IDs e Datail existentes', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Id: 8579-6; lastName: Gates');
    expect(searchEmployee('5569-4', 'specialities')).toBe('Id: 5569-4; specialities: Frontend,Redux,React,CSS');
    expect(searchEmployee('4456-4', 'firstName')).toBe('Id: 4456-4; firstName: Leila');
    expect(searchEmployee('1256-4', 'firstName')).toBe('Id: 1256-4; firstName: Linda');
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Id: 9852-2-2; lastName: Cook');
    expect(searchEmployee('4678-2', 'specialities')).toBe('Id: 4678-2; specialities: Backend');
  })
})