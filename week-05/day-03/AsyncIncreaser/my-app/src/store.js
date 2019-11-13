import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './Components/Counters/Reducer';

const rootReducers = combineReducers({
  counter
})

export default createStore(rootReducers, applyMiddleware(thunk));