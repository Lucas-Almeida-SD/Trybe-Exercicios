import React from 'react';
import MyContext from './MyContext';

class ContextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
  }

  changeSignal = (color) => {
    this.setState({ signal: { color: color } });
  } 

  moveCar = (car) => {
    this.setState((prevState) => (
      { cars: { ...prevState.cars, [car]: !(prevState.cars[car]) } }
    ))
  }

  render() {
    const { children } = this.props
    const { changeSignal, moveCar } = this;
    const { signal: { color: signalColor } } = this.state;
    const { cars: { red: redCar, blue: blueCar, yellow: yellowCar } } = this.state;
    const contextValue = { changeSignal, moveCar, signalColor, redCar, blueCar,
      yellowCar };
    return (
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    );
  }
}

export default ContextComponent;
