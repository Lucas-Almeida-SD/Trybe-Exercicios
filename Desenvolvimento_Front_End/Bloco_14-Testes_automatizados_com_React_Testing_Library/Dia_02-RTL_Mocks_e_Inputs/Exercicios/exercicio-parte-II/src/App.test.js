import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    render(<App />);
    const digimonSearchInput = screen.getByTestId('search-input');
    const searchBtn = screen.getByTestId('search-button');
    const textFacaUmaPesquisa = screen.getByRole('heading')

    expect(digimonSearchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(searchBtn).toHaveTextContent('Search Digimon');
    expect(textFacaUmaPesquisa).toBeInTheDocument();
    expect(textFacaUmaPesquisa).toHaveTextContent('Faça uma pesquisa');

    userEvent.type(digimonSearchInput, 'patamon');
    userEvent.click(searchBtn);
    const digimonText = await screen.findByTestId('digimonName');
    expect(digimonText).toBeInTheDocument();

    userEvent.clear(digimonSearchInput);
    expect(digimonSearchInput).toHaveValue('');
    userEvent.type(digimonSearchInput, 'digimon');
    userEvent.click(searchBtn);
    const errorMessage = await screen.findByText('Digimon is not a Digimon in our database.');
    expect(errorMessage).toBeInTheDocument();
  });
});
