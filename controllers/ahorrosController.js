const storage = require('../data/storage');

class AhorrosController {
    // Método para agregar una cuenta de ahorro
    agregarCuentaAhorro(req, res) {
        const { id, saldo, usuarioId } = req.body;
        const nuevaCuenta = { id, saldo, usuarioId };
        storage.cuentasahorro.push(nuevaCuenta);
        res.status(201).send({ mensaje: 'Cuenta de ahorro agregada exitosamente', cuenta: nuevaCuenta });
    }

    // Método para editar una cuenta de ahorro
    editarCuentaAhorro(req, res) {
        const { id } = req.params;
        const { saldo, usuarioId } = req.body;
        const cuenta = storage.cuentasahorro.find(c => c.id === id);
        if (cuenta) {
            cuenta.saldo = saldo;
            cuenta.usuarioId = usuarioId;
            res.send({ mensaje: 'Cuenta de ahorro actualizada exitosamente', cuenta });
        } else {
            res.status(404).send({ mensaje: 'Cuenta de ahorro no encontrada' });
        }
    }

    // Método para eliminar una cuenta de ahorro
    eliminarCuentaAhorro(req, res) {
        const { id } = req.params;
        const index = storage.cuentasahorro.findIndex(c => c.id === id);
        if (index !== -1) {
            storage.cuentasahorro.splice(index, 1);
            res.send({ mensaje: 'Cuenta de ahorro eliminada exitosamente' });
        } else {
            res.status(404).send({ mensaje: 'Cuenta de ahorro no encontrada' });
        }
    }

    // Método para listar todas las cuentas de ahorro
    listarCuentasAhorro(req, res) {
        res.send(storage.cuentasahorro);
    }

    // Método para obtener los detalles de una cuenta de ahorro
    obtenerDetallesCuentaAhorro(req, res) {
        const { id } = req.params;
        const cuenta = storage.cuentasahorro.find(c => c.id === id);
        if (cuenta) {
            res.send(cuenta);
        } else {
            res.status(404).send({ mensaje: 'Cuenta de ahorro no encontrada' });
        }
    }
}

module.exports = new AhorrosController();
