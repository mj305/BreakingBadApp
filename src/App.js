import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Home from './components/Home';
import CharactersPage from './components/CharactersPage'
import './App.css';


function App() {
  return (
    
    <div >
      <Router>
        <Switch>

          <Route path="/character/:id">
            <CharactersPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;