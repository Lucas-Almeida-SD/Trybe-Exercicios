import React from 'react';
import { connect } from 'react-redux';
import { filterButtons } from './redux/actions/filterButtons';

class FilterButtons extends React.Component {
  constructor() {
    super();
    this.changeFilter = this.changeFilter.bind(this);
    this.putClassNameOnSelected = this.putClassNameOnSelected.bind(this);
  }

  changeFilter({ target }) {
    const { filterButtons} = this.props
    filterButtons(target.value);
  }

  putClassNameOnSelected(button) {
    const { filterSelected } = this.props;
    if (button === filterSelected) { return 'selected-button' };
    return 'not-selected-button';
  }

  render() {
    const { todoList } = this.props;
    const onHoldList = todoList.filter((e) => e.status === 'espera');
    const progressList = todoList.filter((e) => e.status === 'progresso');
    const concludeList = todoList.filter((e) => e.status === 'concluidas');
    const { changeFilter, putClassNameOnSelected } = this;
    return (
      <div>
        <button
          data-testid="em-espera-filter-btn"
          type="button"
          className={ putClassNameOnSelected('espera') }
          value="espera"
          onClick={ changeFilter }
        >
          {`Em espera (${onHoldList.length})`}
        </button>
        <button
          data-testid="em-progresso-filter-btn"
          type="button"
          className={ putClassNameOnSelected('progresso') }
          value="progresso"
          onClick={ changeFilter }
        >
          {`Em progresso (${progressList.length})`}
        </button>
        <button
          data-testid="concluidas-filter-btn"
          type="button"
          className={ putClassNameOnSelected('concluidas') }
          value="concluidas"
          onClick={ changeFilter }
        >
          {`Concluídas (${concludeList.length})`}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoReducer.todoList,
  filterSelected: state.filterButtonsReducer,
})

const mapDispatchToProps = (dispatch) => ({
  filterButtons: (filter) => dispatch(filterButtons(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);
