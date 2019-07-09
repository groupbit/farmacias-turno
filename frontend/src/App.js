import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import Entitylis from "./componentes/EntityList"

function FarmaciasComponent(){
  return (<Entitylis entity="farmacias"/>)
}

function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Farmacias">Farmacias</NavLink></li>
        </ul>
      </header>
      <main className="App-main">
          <Switch>
            <Route path="/farmacias"  component={FarmaciasComponent} />
            <Redirect to="/" />
          </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
