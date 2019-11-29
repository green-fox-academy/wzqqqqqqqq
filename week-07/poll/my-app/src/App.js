import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Vote from './Components/Vote';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/vote" component={Vote} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
