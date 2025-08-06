import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {usuarios.map(user => (
        <li key={user.id}>{user.nome} - {user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;
