const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:16965274@omnistack-34xgg.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (filtros)
// req.params = Acessar route params (edição e delete)
// req.body = Acessar corpo da requisição (criação e edição de registros)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../', './uploads')))
app.use(routes);

app.listen(3333);
