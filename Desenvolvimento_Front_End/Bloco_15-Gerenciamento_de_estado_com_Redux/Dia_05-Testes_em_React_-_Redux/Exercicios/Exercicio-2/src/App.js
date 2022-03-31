import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import { connect } from 'react-redux';
import FilterButtons from './FilterButtons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'Todas',
    }
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const { todoList, filter } = this.props;
    const filteredList = todoList.filter((e) => (e.status === filter));
    if (todoList.length > 0) {
      return (
        <div className='todolist-section'>
          <FilterButtons />
          <ul>
            {
              filteredList.map((todo, index) => (
                <li key={ index + 1 } className="item">
                  <Item
                    content={ todo.task }
                    status={todo.status}
                    isSelected={todo.isSelected} 
                  />
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  render() {
    const { renderList } = this;
    return (
      <div className="App">
        <InputTodo />
        {renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
  todoList: state.todoReducer.todoList,
  filter: state.filterButtonsReducer,
})};

export default connect(mapStateToProps)(App);
