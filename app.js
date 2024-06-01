const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuración de middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const cooperativaRoutes = require('./routes/cooperativaRoutes');

// Usar rutas
app.use('/usuarios', usuarioRoutes);
app.use('/cooperativas', cooperativaRoutes);

module.exports = app;
