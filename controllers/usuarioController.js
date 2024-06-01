const storage = require('../data/storage');

class UsuarioController {
    agregarUsuario(req, res) {
        const { id, nombre, cuentaAhorro, cuentaPrestamo } = req.body;
        const nuevoUsuario = {
            id,
            nombre,
            cuentasAhorro: cuentaAhorro ? [cuentaAhorro] : [],
            cuentasPrestamo: cuentaPrestamo ? [cuentaPrestamo] : []
        };
        storage.usuarios.push(nuevoUsuario);
        res.status(201).send({ mensaje: 'Usuario agregado exitosamente', usuario: nuevoUsuario });
    }

    editarUsuario(req, res) {
        const { id } = req.params;
        const { nombre } = req.body;
        const usuario = storage.usuarios.find(u => u.id === id);
        if (usuario) {
            usuario.nombre = nombre;
            res.send({ mensaje: 'Usuario actualizado exitosamente', usuario });
        } else {
            res.status(404).send({ mensaje: 'Usuario no encontrado' });
        }
    }

    eliminarUsuario(req, res) {
        const { id } = req.params;
        const index = storage.usuarios.findIndex(u => u.id === id);
        if (index !== -1) {
            storage.usuarios.splice(index, 1);
            res.send({ mensaje: 'Usuario eliminado exitosamente' });
        } else {
            res.status(404).send({ mensaje: 'Usuario no encontrado' });
        }
    }

    listarUsuarios(req, res) {
        res.send(storage.usuarios);
    }

    obtenerDetallesUsuario(req, res) {
        const { id } = req.params;
        const usuario = storage.usuarios.find(u => u.id === id);
        if (usuario) {
            res.send(usuario);
        } else {
            res.status(404).send({ mensaje: 'Usuario no encontrado' });
        }
    }
}

module.exports = new UsuarioController();
