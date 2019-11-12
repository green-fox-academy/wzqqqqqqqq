import React from "react";
import "./App.css";
import { createStore,combineReducers  } from "redux";

function App() {
  const SET = "SET";
  const INCREASE = "INCREASE";
  const RESET = "RESET";
  const DECREASE = "DECREASE";
  const ADD_TAG = "ADD_TAG";
  const REMOVE_TAGS = "REMOVE_TAGS";
  const REMOVE_ALL_TAGS = "REMOVE_TAG";

  const counter = (state = 0, action) => {
    switch (action.type) {
      case SET:
        return action.amount;
      case INCREASE:
        return state + (action.amount || 1);
      case RESET:
        return 0;
      case DECREASE:
        return state - (action.amount || 1);
      default:
        return state;
    }
  };

  const tags = (state = [], action) => {
    switch (action.type) {
      case ADD_TAG:
        return [...new Set([ ...state, action.tag ])];
      case REMOVE_TAGS:
        return [ ...state.filter(tag => tag !== action.tag) ];
      case REMOVE_ALL_TAGS:
        return [];
      default:
        return state;
    }
  }

  const store = createStore(combineReducers({
    counter,
    tags
  }));

  store.subscribe(() => console.log(store.getState()));

  store.dispatch({ type: "SET", amount: 6 });
  store.dispatch({ type: "INCREASE" });
  store.dispatch({ type: "INCREASE", amount: 2 });
  store.dispatch({ type: "RESET" });
  store.dispatch({ type: "INCREASE" });
  store.dispatch({ type: "DECREASE", amount: 4 });
  store.dispatch({ type: "ADD_TAG", tag: "blue" });
  store.dispatch({ type: "ADD_TAG", tag: "bold" });
  store.dispatch({ type: "ADD_TAG", tag: "hipster" });
  store.dispatch({ type: "REMOVE_TAG", tag: "blue" });
  store.dispatch({ type: "ADD_TAG", tag: "bold" });
  store.dispatch({ type: "REMOVE_ALL_TAGS" });

  return <></>;
}

export default App;
