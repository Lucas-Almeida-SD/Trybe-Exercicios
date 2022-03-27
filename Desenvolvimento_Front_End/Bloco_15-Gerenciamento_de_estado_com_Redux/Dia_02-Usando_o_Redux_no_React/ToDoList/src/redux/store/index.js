import { combineReducers } from "redux";
import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";
import filterButtonsReducer from '../reducers/filterButtonsReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  todoReducer,
  filterButtonsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
