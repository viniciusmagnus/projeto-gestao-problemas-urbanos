import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o componente Routes

import CadastrarProblema from './components/CadastrarProblema';
import ListarProblemas from './components/ListarProblemas';
import ProblemaItem from './components/ProblemaItem';
import Home from './components/Home';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/cadastrarproblema" element={<CadastrarProblema />} />
          <Route path="/problemas" element={<ListarProblemas />} />
          <Route path="/problema" element={<ProblemaItem />} />
          {/* Rota para página não encontrada (404) */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;