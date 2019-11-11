import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Counter from './Counter'

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <p> counter : </p>
      <Counter />
    </Provider>
  )
}

export default App;