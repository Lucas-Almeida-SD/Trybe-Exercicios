import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers/reducer";

const rootReducer = combineReducers({ reducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
  );

export default store;
