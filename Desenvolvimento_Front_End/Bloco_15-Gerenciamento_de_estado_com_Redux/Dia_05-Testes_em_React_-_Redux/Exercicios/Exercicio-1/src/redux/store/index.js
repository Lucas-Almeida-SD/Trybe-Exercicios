import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { changeSignalReducer } from '../reducers/changeSignalReducer';
import { moveCarReducer } from '../reducers/moveCarReducer';

const rootReducer = combineReducers({
  changeSignalReducer,
  moveCarReducer,
});

const store = createStore(rootReducer);

export default store;