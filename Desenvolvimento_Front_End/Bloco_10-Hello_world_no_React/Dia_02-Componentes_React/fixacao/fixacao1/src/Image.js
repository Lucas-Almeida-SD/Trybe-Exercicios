import React from 'react';

class Image extends React.Component {
  render() {
    return <img className='App-logo' src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;