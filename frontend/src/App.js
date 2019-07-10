import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import Entitylis from "./componentes/EntityList"
import CargarFarmacia from "./componentes/CargarFarmacia"

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
          <li><NavLink to="/farmacias">Farmacias</NavLink></li>
          <li><NavLink to="/Cargar">Agregar</NavLink></li>
        </ul>
      </header>
      <main className="App-main">
          <Switch>
            <Route path="/farmacias"  component={FarmaciasComponent} />
            <Route path="/Cargar"  component={CargarFarmacia} />
            <Redirect to="/" />
          </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
