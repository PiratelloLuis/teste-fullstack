import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoUsuario = {
      nome,
      email
    };

    axios.post('http://localhost:3001/users', novoUsuario)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        if (onCadastro) onCadastro(); // Atualiza lista no App.js
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm;
