import { createStore, combineReducers } from 'redux';

import { counter } from './Counter/reducers';

export default createStore(
  combineReducers({
    counter,
  })
);