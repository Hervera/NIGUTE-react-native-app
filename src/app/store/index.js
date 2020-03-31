import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
