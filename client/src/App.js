import './App.css';
import {
  BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './componentes/Home/Home';
import Landing from './componentes/Landing/Landing'
import Form from './componentes/FormUsuario/FormUsuario';
import FormVotacion from './componentes/FormVotacion/FormVotacion';
import Otro from './Otro/otro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Landing/>} />
        <Route exact path = "/Form" element = {<Form/>} />
        <Route exact path = "/home" element = {<Home/>} />
        {/* <Route exact path = "/votacion" element = {<FormVotacion/>} /> */}
        <Route path = "/otro" element = {<Otro/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
