// backend/app.js
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/users');
const weatherRoutes = require('./routes/weather');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/users', userRoutes);
app.use('/weather', weatherRoutes);

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
