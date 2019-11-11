import React from 'react';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter, increaseCounterBy } from './actionCreators';

function Counter({ whatever, increase, decrease, increaseBy }) {
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{whatever}</span>
      <button onClick={increase}>+</button>
      <button onClick={() => increaseBy(3)}>+3</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    whatever: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => { dispatch(increaseCounter()) },
    decrease: () => { dispatch(decreaseCounter()) },
    increaseBy: (value) => { dispatch(increaseCounterBy(value)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);