import React from "react";
import store from "./store";
import { Provider } from "react-redux";

import { Increaser, Decreaser, Resetter, Setter ,AsyncIncrease} from "./Components/Counters";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Increaser/>
        <Decreaser/>
        <Resetter/>
        <Setter/>
      </div>

      <div>
        <AsyncIncrease/>
      </div>
    </Provider>
  );
}

export default App;
