import React, { useState } from 'react';

function Home({ usuarios }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const itensPorPagina = 50;

  const totalPaginas = Math.ceil(usuarios.length / itensPorPagina);
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
const usuariosOrdenados = [...usuarios].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
const usuariosPaginados = usuariosOrdenados.slice(indiceInicio, indiceInicio + itensPorPagina);


  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Usuários (Página {paginaAtual} de {totalPaginas})</h1>

      <table border="1" cellPadding="8">
        <thead>
          <tr><th>ID</th><th>Nome</th><th>Email</th></tr>
        </thead>
        <tbody>
          {usuariosPaginados.map(u => (
            <tr key={u.id} onClick={() => setUsuarioSelecionado(u)} style={{ cursor: 'pointer' }}>
              <td>{u.id}</td>
              <td>{u.nome}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => mudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>Anterior</button>
        <button onClick={() => mudarPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>Próxima</button>
      </div>

      {usuarioSelecionado && (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Detalhes do Usuário</h2>
          <p><strong>ID:</strong> {usuarioSelecionado.id}</p>
          <p><strong>Nome:</strong> {usuarioSelecionado.nome}</p>
          <p><strong>Email:</strong> {usuarioSelecionado.email}</p>
          <button onClick={() => setUsuarioSelecionado(null)}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default Home;
