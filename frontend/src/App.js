import React from 'react';
import './App.css';
import logo2 from './logo2.png';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink as Link} from "react-router-dom"
import EntityList from "./componentes/EntityList"
import FarmaciaDeTurno from "./componentes/FarmaciaDeTurno"
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
            <NavLink tag={Link} to="/farmaciaDeTurno" activeClassName="active">Farmacia De Turno</NavLink>
          </NavItem>
        </Nav> 
       <img src={logo2} className="App-logo" alt="logo2" />
      <main className="App-main">
          <Switch>
            <Route path="/farmacias"  component={FarmaciasComponent} />
            <Route path="/farmaciaDeTurno"  component={FarmaciaDeTurno} />
            <Redirect to="/" />
          </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
