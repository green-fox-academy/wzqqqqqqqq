import { createStore, combineReducers } from 'redux';
import counter from './Components/Counters/Reducer';

export default createStore(combineReducers({ 
  counter,
}));