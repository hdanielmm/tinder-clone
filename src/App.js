import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
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
