import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Home from './components/Home';
import CharactersPage from './components//CharactersPage'

function App() {
  return (
   
      <Router>
      <Switch>

          <Route path="/characters/:name">
            <CharactersPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
   
  );
}

export default App;
