const storage = require('../data/storage');

class CooperativaController {
    agregarCooperativa(req, res) {
        const { id, nombre, usuarios } = req.body;
        const nuevaCooperativa = { id, nombre, usuarios: usuarios || [] };
        storage.cooperativas.push(nuevaCooperativa);
        res.status(201).send({ mensaje: 'Cooperativa agregada exitosamente', cooperativa: nuevaCooperativa });
    }

    editarCooperativa(req, res) {
        const { id } = req.params;
        const { nombre, usuarios } = req.body;
        const cooperativa = storage.cooperativas.find(c => c.id === id);
        if (cooperativa) {
            cooperativa.nombre = nombre;
            cooperativa.usuarios = usuarios;
            res.send({ mensaje: 'Cooperativa actualizada exitosamente', cooperativa });
        } else {
            res.status(404).send({ mensaje: 'Cooperativa no encontrada' });
        }
    }

    eliminarCooperativa(req, res) {
        const { id } = req.params;
        const index = storage.cooperativas.findIndex(c => c.id === id);
        if (index !== -1) {
            storage.cooperativas.splice(index, 1);
            res.send({ mensaje: 'Cooperativa eliminada exitosamente' });
        } else {
            res.status(404).send({ mensaje: 'Cooperativa no encontrada' });
        }
    }

    listarCooperativas(req, res) {
        res.send(storage.cooperativas);
    }

    obtenerDetallesCooperativa(req, res) {
        const { id } = req.params;
        const cooperativa = storage.cooperativas.find(c => c.id === id);
        if (cooperativa) {
            res.send(cooperativa);
        } else {
            res.status(404).send({ mensaje: 'Cooperativa no encontrada' });
        }
    }

    agregarUsuarioACooperativa(req, res) {
        const { cooperativaId, usuarioId } = req.params;
        const cooperativa = storage.cooperativas.find(c => c.id === cooperativaId);
        if (cooperativa) {
            cooperativa.usuarios.push(usuarioId);
            res.send({ mensaje: 'Usuario agregado a la cooperativa exitosamente', cooperativa });
        } else {
            res.status(404).send({ mensaje: 'Cooperativa no encontrada' });
        }
    }

    eliminarUsuarioDeCooperativa(req, res) {
        const { cooperativaId, usuarioId } = req.params;
        const cooperativa = storage.cooperativas.find(c => c.id === cooperativaId);
        if (cooperativa) {
            cooperativa.usuarios = cooperativa.usuarios.filter(id => id !== usuarioId);
            res.send({ mensaje: 'Usuario eliminado de la cooperativa exitosamente', cooperativa });
        } else {
            res.status(404).send({ mensaje: 'Cooperativa no encontrada' });
        }
    }
}

module.exports = new CooperativaController();
