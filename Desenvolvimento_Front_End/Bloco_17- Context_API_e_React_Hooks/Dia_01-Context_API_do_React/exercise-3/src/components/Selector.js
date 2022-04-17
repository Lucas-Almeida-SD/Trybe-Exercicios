import React from 'react';
import MyContext from '../MyContext';

class Selector extends React.Component {
  renderOptions = (options) => (
    options.map((option) => (
      <option
        value={option}
        key={option}
      >
        {option}
      </option>
    ))
  );

  render() {
    const { selectedSubreddit, selectSubreddit, postsBySubreddit } = this.context;
    const options = Object.keys(postsBySubreddit);
    return (
      <span>
        <h1>{`Selected: ${selectedSubreddit}`}</h1>
        <select
          onChange={(e) => selectSubreddit(e.target.value)}
          value={selectedSubreddit}
        >
          {this.renderOptions(options)}
        </select>
      </span>
    );
  }
};

Selector.contextType = MyContext;

export default Selector;