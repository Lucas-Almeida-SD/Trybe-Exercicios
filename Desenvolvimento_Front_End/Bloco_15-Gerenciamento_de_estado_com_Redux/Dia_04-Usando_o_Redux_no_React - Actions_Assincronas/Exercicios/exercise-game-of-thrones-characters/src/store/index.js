//importe o método applyMiddleware 
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//importe o redux-thunk
import thunk from 'redux-thunk';

import reducer from '../reducers';

const rootReducer = combineReducers({ reducer });

//aplique o middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
