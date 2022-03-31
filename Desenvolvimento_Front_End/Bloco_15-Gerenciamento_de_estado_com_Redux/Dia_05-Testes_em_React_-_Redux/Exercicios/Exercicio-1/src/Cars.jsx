import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actions/moveCar';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button
          onClick={() => moveCar('red', !redCar)}
          type="button"
          data-testid="red-car-button"
        >
          Move
        </button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button
          onClick={() => moveCar('blue', !blueCar)}
          type="button"
          data-testid="blue-car-button"
        >Move
      </button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button
          onClick={() => moveCar('yellow', !yellowCar)}
          type="button"
          data-testid="yellow-car-button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.moveCarReducer.cars.red,
  blueCar: state.moveCarReducer.cars.blue,
  yellowCar: state.moveCarReducer.cars.yellow,
});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
