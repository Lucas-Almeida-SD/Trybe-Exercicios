import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import filterButtonsReducer from './redux/reducers/filterButtonsReducer';
import todoReducer from './redux/reducers/todoReducer';
import App from './App';
import userEvent from '@testing-library/user-event';

const rootReducer = combineReducers({
  filterButtonsReducer,
  todoReducer,
});

const renderWithRedux = (
  component,
  { initialState = {}, store = createStore(rootReducer, initialState) } = {}
  ) => ({
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  }
);

describe('Testes da funcionalidade do Todo List', () => {
  it('Teste se ao renderizar a aplicação, existe um input com a label "Tarefa"', () => {
    renderWithRedux(<App />)
    const input = screen.getByLabelText(/tarefa:/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('Teste se ao renderizar a aplicação, existe um botão com o texto "Adicionar"', () => {
    renderWithRedux(<App />)
    const button = screen.getByRole('button', {name: /adicionar/i});
    expect(button).toBeInTheDocument();
  });

  it('Teste se a aplicação renderiza a tarefa "Estudar" ao adiciona-lá na lista', () => {
    renderWithRedux(<App />)
    const input = screen.getByLabelText(/tarefa:/i);
    const button = screen.getByRole('button', {name: /adicionar/i});
    userEvent.type(input, 'Estudar');
    userEvent.click(button);
    expect(screen.getByText('Estudar')).toBeInTheDocument();
  });

  it('Mock o state com duas tarefas ("Ler" e "Dormir"), verifique se os filtros ' 
  + 'funcionam corretamente e se o número de tarefas correspondem', () => {
    const initialState = {
      todoReducer: { todoList: 
        [
          { task: 'Ler', status: 'espera', isSelected: false },
          { task: 'Dormir', status: 'espera', isSelected: false },
        ]
      },
      filterButtonsReducer: "espera",
    }
    const { store } = renderWithRedux(<App />, { initialState: initialState })

    const esperaBtn = screen.getByTestId('em-espera-filter-btn');
    const progressoBtn = screen.getByTestId('em-progresso-filter-btn');
    const concluidasBtn = screen.getByTestId('concluidas-filter-btn');

    expect(screen.getByText('Ler')).toBeInTheDocument();
    expect(screen.getByText('Dormir')).toBeInTheDocument();
    expect(store.getState().todoReducer.todoList).toHaveLength(2);

    let tasks = screen.getAllByTestId('task');
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('progresso'));
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('progresso'));
    expect(screen.queryByText('Ler')).not.toBeInTheDocument();
    expect(screen.queryByText('Dormir')).not.toBeInTheDocument();

    userEvent.click(progressoBtn);
    tasks = screen.getAllByTestId('task');
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('concluidas'));
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('concluidas'));
    expect(screen.queryByText('Ler')).not.toBeInTheDocument();
    expect(screen.queryByText('Dormir')).not.toBeInTheDocument();

    userEvent.click(concluidasBtn);
    tasks = screen.getAllByTestId('task');
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('espera'));
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('espera'));
    expect(screen.queryByText('Ler')).not.toBeInTheDocument();
    expect(screen.queryByText('Dormir')).not.toBeInTheDocument();

    userEvent.click(esperaBtn);
    tasks = screen.getAllByTestId('task');
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('remover'));
    userEvent.click(tasks[0]);
    userEvent.click(screen.getByTestId('remover'));
    expect(screen.queryByText('Ler')).not.toBeInTheDocument();
    expect(screen.queryByText('Dormir')).not.toBeInTheDocument();
    expect(store.getState().todoReducer.todoList).toHaveLength(0);
    expect(esperaBtn).not.toBeInTheDocument();
    expect(progressoBtn).not.toBeInTheDocument();
    expect(concluidasBtn).not.toBeInTheDocument();
  })
})