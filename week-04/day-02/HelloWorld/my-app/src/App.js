import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={HelloWorld} exact />
        <Route path="/error" component={Error} />
      </BrowserRouter>
    </div>
  );
}

export default App;
