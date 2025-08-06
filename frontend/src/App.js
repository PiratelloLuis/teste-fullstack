import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = () => {
    axios.get('http://localhost:3001/users')
      .then(res => setUsuarios(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Usuários</Link> | <Link to="/cadastro">Cadastrar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home usuarios={usuarios} />} />
        <Route path="/cadastro" element={<Cadastro onCadastro={fetchUsuarios} />} />
      </Routes>
    </Router>
  );
}

export default App;
