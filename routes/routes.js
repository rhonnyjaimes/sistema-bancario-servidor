const express = require('express');
const router = express.Router();
const cooperativaController = require('../controllers/cooperativaController');
const usuarioController = require('../controllers/usuarioController');
const PrestamosController = require('../controllers/prestamosController');
const AhorrosController = require('../controllers/ahorrosController');

// Rutas para cuentas de préstamo
router.post('/prestamos', PrestamosController.agregarCuentaPrestamo);
router.put('/prestamos/:id', PrestamosController.editarCuentaPrestamo);
router.delete('/prestamos/:id', PrestamosController.eliminarCuentaPrestamo);
router.get('/prestamos', PrestamosController.listarCuentasPrestamo);
router.get('/prestamos/:id', PrestamosController.obtenerDetallesCuentaPrestamo);

// Rutas para cuentas de ahorro
router.post('/ahorros', AhorrosController.agregarCuentaAhorro);
router.put('/ahorros/:id', AhorrosController.editarCuentaAhorro);
router.delete('/ahorros/:id', AhorrosController.eliminarCuentaAhorro);
router.get('/ahorros', AhorrosController.listarCuentasAhorro);
router.get('/ahorros/:id', AhorrosController.obtenerDetallesCuentaAhorro);

// Rutas para cooperativas
router.post('/cooperativas', cooperativaController.agregarCooperativa);
router.put('/cooperativas/:id', cooperativaController.editarCooperativa);
router.delete('/cooperativas/:id', cooperativaController.eliminarCooperativa);
router.get('/cooperativas', cooperativaController.listarCooperativas);
router.get('/cooperativas/:id', cooperativaController.obtenerDetallesCooperativa);
router.put('/cooperativas/:cooperativaId/usuarios/:usuarioId', cooperativaController.agregarUsuarioACooperativa);
router.delete('/cooperativas/:cooperativaId/usuarios/:usuarioId', cooperativaController.eliminarUsuarioDeCooperativa);

// Rutas para usuarios
router.post('/usuarios', usuarioController.agregarUsuario);
router.put('/usuarios/:id', usuarioController.editarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.get('/usuarios/:id', usuarioController.obtenerDetallesUsuario);
router.post('/usuarios/:id/cuentas-ahorro', usuarioController.agregarCuentaAhorro);
router.post('/usuarios/:id/cuentas-prestamo', usuarioController.agregarCuentaPrestamo);

module.exports = router;
