import React from "react";
import SearchBar from './components/SearchBar/SearchBar.js';
import Catalogo from './components/Catalogo/Catalogo.js';
import CatalogoNew from './components/Catalogo/CatalogoNew.js';
import CatalogoUsed from './components/Catalogo/CatalogoUsed.js'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" component={SearchBar}/>
      <Route path="/catalogo" exact component={Catalogo}/>
      <Route path="/catalogoNew" exact component={CatalogoNew}/>
      <Route path="/catalogoUsed" exact component={CatalogoUsed}/>
    </div>
  );
}

export default App;
