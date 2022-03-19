import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: 'not-selected',
    };
    this.selectTask = this.selectTask.bind(this);
  }

  selectTask() {
    const { isSelected } = this.state;
    if (isSelected === 'selected') {
      this.setState({ isSelected: 'not-selected' });
    } else {
      this.setState({ isSelected: 'selected' });
    }
  }

  render() {
    const { content, removeTask } = this.props;
    const { isSelected } = this.state;
    const { selectTask } = this;
    return (
      <div
        className="Item"
        onClick={ selectTask }
        aria-hidden="true"
      >
        <p>{content}</p>
        {(isSelected === 'selected')
          ? <button type="button" onClick={ () => removeTask(content) }>Remover</button>
          : null }
      </div>
    );
  }
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
};
