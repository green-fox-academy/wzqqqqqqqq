import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Error from "./components/Error";
import Undefined from "./components/Undefined";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route
          path="/error/:errorcode"
          render={({ match }) => <p>Error: {match.params.errorcode}</p>}
        />
        <Route path="/error" component={Error} />
        <Route component={Undefined} />
      </Switch>
    </Router>
  );
}

export default App;
