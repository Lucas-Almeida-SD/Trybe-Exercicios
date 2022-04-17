import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false });
  const [signal, setSignal] = useState({ color: 'red' });
  

  const moveCar = (car, side) => {
    setCars((prev) => ({ ...prev, [car]: side }))
  }

  const changeSignal = (color) => {
    setSignal({ color })
  }

  const contextValue = { cars, signal, moveCar, changeSignal }
  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
