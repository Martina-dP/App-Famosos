import './App.css';
import {
  BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './componentes/Home/Home';
import Landing from './componentes/Landing/Landing'
import Form from './componentes/Form/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Landing/>} />
        <Route exact path = "/Form" element = {<Form/>} />
        <Route exact path = "/home" element = {<Home/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
