import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar = (color, value) => {
    this.setState({ [color]: value });
  }

  render() {
    const { red: redCar, blue: blueCar, yellow: yellowCar } = this.state;
    const { moveCar } = this;
    const contextValue = { redCar, blueCar, yellowCar, moveCar };
    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
