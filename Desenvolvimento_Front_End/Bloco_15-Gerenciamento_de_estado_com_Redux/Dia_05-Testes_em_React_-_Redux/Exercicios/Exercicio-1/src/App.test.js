import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { moveCarReducer } from './redux/reducers/moveCarReducer';
import Cars from './Cars';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { 
    initialState, store = createStore(combineReducers({ moveCarReducer }), initialState),
  } = {}) => ({
  ...render(<Provider store={store }>{component}</Provider>),
  store,
})

describe('Teste do componente Cars', () => {
  it('Teste se o comportamento do carro vermelho está funcionando', () => {
    const { store } = renderWithRedux(<Cars />);
    const redCarBtn = screen.getByTestId('red-car-button');
    expect(redCarBtn).toBeInTheDocument();
    expect(store.getState().moveCarReducer.cars.red).toBe(false)
   
    userEvent.click(redCarBtn);
    expect(store.getState().moveCarReducer.cars.red).toBe(true)

    userEvent.click(redCarBtn);
    expect(store.getState().moveCarReducer.cars.red).toBe(false)
  })

  it('Teste se o comportamento do carro azul está funcionando', () => {
    const { store } = renderWithRedux(<Cars />);
    const blueCarBtn = screen.getByTestId('blue-car-button');
    expect(blueCarBtn).toBeInTheDocument();
    expect(store.getState().moveCarReducer.cars.blue).toBe(false)
   
    userEvent.click(blueCarBtn);
    expect(store.getState().moveCarReducer.cars.blue).toBe(true)

    userEvent.click(blueCarBtn);
    expect(store.getState().moveCarReducer.cars.blue).toBe(false)
  })

  it('Teste se o comportamento do carro amarelo está funcionando', () => {
    const { store } = renderWithRedux(<Cars />);
    const yellowCarBtn = screen.getByTestId('yellow-car-button');
    expect(yellowCarBtn).toBeInTheDocument();
    expect(store.getState().moveCarReducer.cars.yellow).toBe(false)
   
    userEvent.click(yellowCarBtn);
    expect(store.getState().moveCarReducer.cars.yellow).toBe(true)

    userEvent.click(yellowCarBtn);
    expect(store.getState().moveCarReducer.cars.yellow).toBe(false)
  })
})