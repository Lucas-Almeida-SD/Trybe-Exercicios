import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTask(content) {
    const { listTodo } = this.state;
    const newListToDo = listTodo.filter((element) => element !== content);
    this.setState({ listTodo: newListToDo });
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {listTodo && (
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item content={ todo } removeTask={ this.removeTask } />
                </li>
              ))
            }
          </ul>
        )}
      </div>
    );
  }
}
export default App;
