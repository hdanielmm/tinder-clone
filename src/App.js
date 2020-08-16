import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I'm the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>

        <SwipeButtons />

        {/* chat screen */}
        {/* individual chat screen */}

      </Router>

    </div>
  );
}

export default App;
