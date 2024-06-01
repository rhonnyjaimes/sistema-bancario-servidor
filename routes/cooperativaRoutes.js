const express = require('express');
const router = express.Router();
const cooperativaController = require('../controllers/cooperativaController');

router.post('/', cooperativaController.agregarCooperativa.bind(cooperativaController));
router.put('/:id', cooperativaController.editarCooperativa.bind(cooperativaController));
router.delete('/:id', cooperativaController.eliminarCooperativa.bind(cooperativaController));
router.get('/', cooperativaController.listarCooperativas.bind(cooperativaController));
router.get('/:id', cooperativaController.obtenerDetallesCooperativa.bind(cooperativaController));
router.put('/:cooperativaId/usuarios/:usuarioId', cooperativaController.agregarUsuarioACooperativa.bind(cooperativaController));
router.delete('/:cooperativaId/usuarios/:usuarioId', cooperativaController.eliminarUsuarioDeCooperativa.bind(cooperativaController));

module.exports = router;
