import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Exercicio 1 - Escreva os testes para as configurações iniciais do jogo:',
  () => {
    it('Campos vazios, 9 Casas renderizadas e Sem mensagem de Fim de jogo;.',
      async () => {
        render(<App />);
        const divs = screen.getAllByTestId(/cell_gamecell-0/i);
        const n9 = 9;

        for (let index = 0; index < n9; index += 1) {
          expect(divs[index]).toBeInTheDocument();
        }

        expect(divs).toHaveLength(n9);

        const fimDeJogo = screen.queryByText('Fim de jogo');
        expect(fimDeJogo).not.toBeInTheDocument();
      });
  });

describe('Exercicio 2', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('O símbolo muda quando clica em uma casa e depois em outra, '
  + 'mostrando a troca do jogador e casa não pode ser mudada depois '
  + 'de clicada em por algum jogador', () => {
    const simbol = screen.queryByTestId(/simbol/);
    expect(simbol).not.toBeInTheDocument();

    const divs = screen.getAllByTestId(/cell_gamecell/);
    userEvent.click(divs[0]); // palyerI
    userEvent.click(divs[1]); // palyerII
    expect(screen.getByTestId('x-simbol')).toBeInTheDocument();
    expect(screen.getByTestId('o-simbol')).toBeInTheDocument();

    userEvent.click(divs[0]);
    userEvent.click(divs[2]);
    expect(screen.queryAllByTestId('x-simbol')).toHaveLength(2);
  });
});

describe('Exercicio - 3', () => {
  const gameResultText = 'game-result';
  it('Verifica se a mensagem "Winner: Player 1 (X)" aparece ao final do jogo '
    + 'quando o Player 1 vencer', () => {
    render(<App />);

    let gameResult = screen.queryByTestId(gameResultText);
    expect(gameResult).not.toBeInTheDocument();

    const divs = screen.getAllByTestId(/cell_gamecell/);
    userEvent.click(divs[0]); // Player I
    userEvent.click(divs[4]); // Player II
    userEvent.click(divs[1]); // Player I
    userEvent.click(divs[5]); // Player II
    userEvent.click(divs[2]); // Player I
    gameResult = screen.queryByTestId(gameResultText);
    expect(gameResult).toBeInTheDocument();
    expect(gameResult).toHaveTextContent('Winner: Player 1 (X)');
  });

  it('Verifica se a mensagem "Winner: Player 2 (O)" aparece ao final do jogo '
    + 'quando o Player 2 vencer', () => {
    render(<App />);

    let gameResult = screen.queryByTestId(gameResultText);
    expect(gameResult).not.toBeInTheDocument();

    const divs = screen.getAllByTestId(/cell_gamecell/);
    userEvent.click(divs[1]); // Player I
    userEvent.click(divs[0]); // Player II
    userEvent.click(divs[2]); // Player I
    userEvent.click(divs[3]); // Player II
    userEvent.click(divs[4]); // Player I
    userEvent.click(divs[6]); // Player II
    gameResult = screen.getByTestId(gameResultText);
    expect(gameResult).toBeInTheDocument();
    expect(gameResult).toHaveTextContent('Winner: Player 2 (O)');
  });

  it('Verifica se a mensagem "Empate" e o botão de reiniciar aparece ao final do '
    + 'jogo quando ocorrer empate e se o botão possui a função de reiniciar', () => {
    render(<App />);
    let gameResult = screen.queryByTestId(gameResultText);
    let restartBtn = screen.queryByRole('button', { value: 'Reiniciar' });
    expect(gameResult).not.toBeInTheDocument();
    expect(restartBtn).not.toBeInTheDocument();

    const divs = screen.getAllByTestId(/cell_gamecell/);
    userEvent.click(divs[0]); // Player I
    userEvent.click(divs[2]); // Player II
    userEvent.click(divs[1]); // Player I
    userEvent.click(divs[3]); // Player II
    userEvent.click(divs[5]); // Player I
    userEvent.click(divs[4]); // Player II
    userEvent.click(divs[6]); // Player I
    userEvent.click(divs[7]); // Player II
    userEvent.click(divs[8]); // Player I
    gameResult = screen.getByTestId(gameResultText);
    expect(gameResult).toBeInTheDocument();
    expect(gameResult).toHaveTextContent('Empate');

    restartBtn = screen.getByRole('button', { value: 'Reiniciar' });
    expect(restartBtn).toBeInTheDocument();

    userEvent.click(restartBtn);
    expect(screen.queryByTestId(/simbol/)).not.toBeInTheDocument();
  });
});
