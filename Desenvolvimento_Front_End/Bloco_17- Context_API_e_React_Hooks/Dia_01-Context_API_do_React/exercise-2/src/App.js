import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import ContextComponent from './ContextComponent';

class App extends React.Component {

  render() {
    return (
      <ContextComponent>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </ContextComponent>
    );
  }
}

export default App;
