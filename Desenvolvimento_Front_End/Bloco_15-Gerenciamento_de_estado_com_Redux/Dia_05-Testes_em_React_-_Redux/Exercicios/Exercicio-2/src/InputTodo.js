import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions/addTodo';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' });
    callback(value);
  }

  render() {
    const { addTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="input-todo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            type="text"
            value={ textTodo }
            onChange={ (e) => this.changeTextTodo(e.target.value) }
          />
        </label>
        <input
          className="btnAdd"
          type="button"
          value="Adicionar"
          onClick={ () => this.addItem(textTodo, addTodo) }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(InputTodo);
