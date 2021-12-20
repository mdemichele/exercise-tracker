import { MdAccessAlarm } from 'react-icons/md';
import { MdAddBox } from 'react-icons/md';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <MdAccessAlarm className="App-logo" />
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/create">Create A New Exercise  <MdAddBox className="App-link-icon"/></Link>
        </header>
        
          <Switch>
            <Route path="/create">
              <CreatePage />
            </Route>
            <Route path="/exercises/">
              <EditPage exerciseToEdit={exerciseToEdit}/>
            </Route>
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit}/>
            </Route>
          </Switch> 
        
      </Router>
    </div>
  );
}

export default App;