const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const db = require('./db');

const BATCH_SIZE = 1000;
let batch = [];
let processing = false;
let ended = false;

function insertBatch(callback) {
  if (batch.length === 0) return callback();

  const currentBatch = batch;
  batch = [];
  processing = true;

  db.query('INSERT INTO usuarios (id, nome, email) VALUES ?', [currentBatch], (err) => {
    if (err) {
      console.error('Erro ao inserir batch:', err);
    }
    processing = false;
    callback();
  });
}

const stream = fs.createReadStream(path.join(__dirname, 'users.csv')).pipe(csv());

stream.on('data', (row) => {
  if (row.id && row.name && row.email) {
    batch.push([row.id, row.name, row.email]);
  }

  if (batch.length >= BATCH_SIZE && !processing) {
    stream.pause();
    insertBatch(() => {
      stream.resume();
    });
  }
});

stream.on('end', () => {
  ended = true;

  const finalize = () => {
    if (!processing) {
      if (batch.length > 0) {
        insertBatch(() => {
          db.end();
          console.log('Importação finalizada com batch restante.');
        });
      } else {
        db.end();
        console.log('Importação finalizada.');
      }
    } else {
      setTimeout(finalize, 100); // espera até o batch terminar
    }
  };

  finalize();
});

stream.on('error', (err) => {
  console.error('Erro ao ler CSV:', err);
});
