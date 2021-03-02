import React from "react";
import SearchBar from './components/SearchBar/SearchBar.js';
import Catalogo from './components/Catalogo/Catalogo.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" component={SearchBar}/>
      <Route path="/catalogo" exact component={Catalogo}/>
    </div>
  );
}

export default App;
