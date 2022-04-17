import { useState } from 'react';
import './App.css';
import useArray from './hooks/useArray';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setNewItem, setRemoveItem] = useArray();

  const handleChange = ({ target: { value } }) => {
    setTodo(value);
  }

  const handleClick = () => {
    setNewItem(todo);
    setTodo('');
  }

  return (
    <div className="App">
      <div>
        <label>Tarefa: </label>
        <input type="text" value={ todo } onChange={ handleChange }/>
      </div>
      <button type="button" onClick={ handleClick }>Adicionar</button>
      <h1>To Do List</h1>
      <ul>
        {todoList.map((e, index) => (
          <li key={e}>
            <span>{`${e} `}</span>
            <button type="button" onClick={ () => setRemoveItem(index) }>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
