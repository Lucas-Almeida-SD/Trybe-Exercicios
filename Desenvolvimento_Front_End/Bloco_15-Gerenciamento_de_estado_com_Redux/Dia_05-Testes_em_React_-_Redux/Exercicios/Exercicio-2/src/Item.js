import React from 'react';
import { connect } from 'react-redux';
import { selectTodo } from './redux/actions/selectTodo';
import { removeTodo } from './redux/actions/removeTodo';
import { onHoldTodo } from './redux/actions/onholdTodo';
import { progressTodo } from './redux/actions/progressTodo';
import { concludeTodo } from './redux/actions/concludeTodo';

class Item extends React.Component {
  constructor() {
    super();
    this.selectTask = this.selectTask.bind(this);
    this.getTask = this.getTask.bind(this);
    this.renderStatusButton = this.renderStatusButton.bind(this);
  }

  selectTask({currentTarget}, selectTodo) {
    selectTodo(currentTarget.innerHTML);
  }

  getTask({ currentTarget }, action) {
    const task = currentTarget.parentElement.parentElement.querySelector('p')
      .innerHTML;
    action(task);
  }

  renderStatusButton(title, testid, action) {
    const { getTask } = this;
    return (
    <button
      data-testid={testid}
      type="button"
      onClick={ (event) => getTask(event, action) }
    >
      {title}
    </button>
    )
  }

  render() {
    const { selectTask, renderStatusButton } = this;
    const {
      content,
      isSelected,
      selectTodo,
      onHoldTodo,
      progressTodo,
      concludeTodo,
      removeTodo,
      status,
    } = this.props;
    return (
      <>
        <p
          className={(isSelected) ? 'selected-task' : 'not-selected-task'}
          onClick={ (event) =>  selectTask(event, selectTodo)}
          aria-hidden="true"
          data-testid="task"
        >
          {content}
        </p>
        {(isSelected) ? <div>
          {(status === 'progresso' || status === 'concluidas')
            ? renderStatusButton('Em espera', 'espera', onHoldTodo) : null}
          {(status === 'espera')
            ? renderStatusButton('Em progresso', 'progresso', progressTodo) : null}
          {(status === 'progresso')
            ? renderStatusButton('Concluída', 'concluidas', concludeTodo) : null}
          {renderStatusButton('Remover', 'remover', removeTodo)}
        </div> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoReducer.todoList,
})

const mapDispatchToProps = (dispatch) => ({
  selectTodo: (task) => dispatch(selectTodo(task)),
  onHoldTodo: (task) => dispatch(onHoldTodo(task)),
  concludeTodo: (task) => dispatch(concludeTodo(task)),
  progressTodo: (task) => dispatch(progressTodo(task)),
  removeTodo: (task) => dispatch(removeTodo(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);
