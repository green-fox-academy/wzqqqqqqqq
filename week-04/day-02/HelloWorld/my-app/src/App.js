import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Error from "./components/Error";
import Undefined from "./components/Undefined";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HelloWorld} exact />
        <Route path="/error" component={Error} />
        <Route component={Undefined} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
