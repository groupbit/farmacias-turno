import React from 'react';
import './App.css';
import logo2 from './logo2.jpg';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink as Link} from "react-router-dom"
import EntityList from "./componentes/EntityList"
import CargarFarmacia from "./componentes/CargarFarmacia"
import { Nav, NavItem, NavLink } from 'reactstrap';

function FarmaciasComponent(){
  return (<EntityList entity="farmacias"/>)
}

function App() {
  return (
    <div className="App">
    <Router> 
    <Nav>
          <NavItem>
            <NavLink tag={Link} to="/" activeClassName="active">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/farmacias" activeClassName="active">Farmacias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/Cargar" activeClassName="active">Agregar</NavLink>
          </NavItem>
        </Nav> 
       <img src={logo2} className="App-logo" alt="logo2" />
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
