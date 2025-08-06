import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) return <p>Selecione um usuário para ver os detalhes.</p>;

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserDetails;
