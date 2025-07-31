const db = require('../db');
const { v4: uuidv4 } = require('uuid');

exports.createUser = (req, res) => {
  const { nome, email } = req.body;
  const id = uuidv4();  // gera o UUID para o campo id

  db.query(
    'INSERT INTO usuarios (id, nome, email) VALUES (?, ?, ?)',
    [id, nome, email],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id, nome, email });
    }
  );
};

exports.getUsers = (req, res) => {
  const { nome, email } = req.query;
  let sql = 'SELECT * FROM usuarios WHERE 1=1';
  const params = [];

  if (nome) {
    sql += ' AND nome LIKE ?';
    params.push(`%${nome}%`);
  }
  if (email) {
    sql += ' AND email LIKE ?';
    params.push(`%${email}%`);
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(results[0]);
  });
};
