const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.agregarUsuario.bind(usuarioController));
router.put('/:id', usuarioController.editarUsuario.bind(usuarioController));
router.delete('/:id', usuarioController.eliminarUsuario.bind(usuarioController));
router.get('/', usuarioController.listarUsuarios.bind(usuarioController));
router.get('/:id', usuarioController.obtenerDetallesUsuario.bind(usuarioController));

router.post('/:id/cuentas-ahorro', usuarioController.agregarCuentaAhorro.bind(usuarioController));
router.post('/:id/cuentas-prestamo', usuarioController.agregarCuentaPrestamo.bind(usuarioController));

module.exports = router;
