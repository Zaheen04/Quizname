import logo from './logo.svg';
import './App.css';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </Router>
  );
};

export default App;

