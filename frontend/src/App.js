import React from 'react';
import logo from './logo.svg';
import './App.css';
import Entitylis from "./componentes/EntityList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Entitylis> </Entitylis>
        </p>
    
      </header>
    </div>
  );
}

export default App;
