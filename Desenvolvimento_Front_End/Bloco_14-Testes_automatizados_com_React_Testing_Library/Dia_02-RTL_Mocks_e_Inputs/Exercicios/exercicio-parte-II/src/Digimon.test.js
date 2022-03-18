import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const digimon = {
      img: "https://digimon.shadowsmith.com/img/patamon.jpg",
      level: "Rookie",
      name: "Patamon",
    }
    render(<Digimon digimon={ digimon } />);
    const digimonName = await screen.findByTestId('digimonName');
    const digimonLevel = await screen.findByTestId('digimonLevel');
    expect(digimonName).toBeInTheDocument();
    expect(digimonLevel).toBeInTheDocument();
  });
});
