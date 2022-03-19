import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercicio 1', () => {
  render(<App />);

  test('Verificando o botão de adicionar tarefa', () => {
    render(<App />);
    const btn = screen.getByRole('button');
    const input = screen.getByLabelText(/tarefa/i);
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveValue('Adicionar');

    userEvent.type(input, 'Estudar');
    userEvent.click(btn);

    expect(screen.getByText('Estudar')).toBeInTheDocument();
  });
});

describe('Exercicio 2', () => {
  test('Verifica a adicao das tarefas', () => {
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const btn = screen.getByRole('button');
    const array = ['Estudar', 'Comer', 'Escovar os dentes'];
    for (let index = 0; index < array.length; index += 1) {
      userEvent.type(input, array[index]);
      userEvent.click(btn);
      expect(screen.getByText(array[index])).toBeInTheDocument();
    }
  });

  test('Testa so o componente Item com uma props e verifica se a tarefa'
    + 'renderiza na tela', () => {
    render(<Item content="Estudar" />);
    expect(screen.getByText('Estudar')).toBeInTheDocument();
  });
});
