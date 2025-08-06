import React from 'react';
import UserForm from '../components/UserForm';

const Cadastro = ({ onCadastro }) => {
  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <UserForm onCadastro={onCadastro} />
    </div>
  );
};

export default Cadastro;
