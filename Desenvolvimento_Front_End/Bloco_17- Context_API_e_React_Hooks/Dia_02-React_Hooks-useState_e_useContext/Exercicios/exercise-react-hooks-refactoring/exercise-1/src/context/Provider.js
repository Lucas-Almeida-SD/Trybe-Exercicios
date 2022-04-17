// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  })

  const moveCar = (car, side) => {
    setCars((prev) => ({ ...prev, [car]: side }));
  };

    const context = { cars, moveCar };


    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};


export default Provider;
