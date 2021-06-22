require('reflect-metadata');

require('typeorm').createConnection();

const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
