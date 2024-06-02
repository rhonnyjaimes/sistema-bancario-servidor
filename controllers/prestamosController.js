const storage = require('../data/storage');

class PrestamosController {
    // Método para agregar una cuenta de préstamo
    agregarCuentaPrestamo(req, res) {
        const { id, saldoPendiente, tasaInteres, fechaProximoPago, usuarioId } = req.body;
        const nuevaCuenta = { id, saldoPendiente, tasaInteres, fechaProximoPago, usuarioId };
        storage.cuentasprestamo.push(nuevaCuenta);
        res.status(201).send({ mensaje: 'Cuenta de préstamo agregada exitosamente', cuenta: nuevaCuenta });
    }

    // Método para editar una cuenta de préstamo
    editarCuentaPrestamo(req, res) {
        const { id } = req.params;
        const { saldoPendiente, tasaInteres, fechaProximoPago, usuarioId } = req.body;
        const cuenta = storage.cuentasprestamo.find(c => c.id === id);
        if (cuenta) {
            cuenta.saldoPendiente = saldoPendiente;
            cuenta.tasaInteres = tasaInteres;
            cuenta.fechaProximoPago = fechaProximoPago;
            cuenta.usuarioId = usuarioId;
            res.send({ mensaje: 'Cuenta de préstamo actualizada exitosamente', cuenta });
        } else {
            res.status(404).send({ mensaje: 'Cuenta de préstamo no encontrada' });
        }
    }

    // Método para eliminar una cuenta de préstamo
    eliminarCuentaPrestamo(req, res) {
        const { id } = req.params;
        const index = storage.cuentasprestamo.findIndex(c => c.id === id);
        if (index !== -1) {
            storage.cuentasprestamo.splice(index, 1);
            res.send({ mensaje: 'Cuenta de préstamo eliminada exitosamente' });
        } else {
            res.status(404).send({ mensaje: 'Cuenta de préstamo no encontrada' });
        }
    }

    // Método para listar todas las cuentas de préstamo
    listarCuentasPrestamo(req, res) {
        res.send(storage.cuentasprestamo);
    }

    // Método para obtener los detalles de una cuenta de préstamo
    obtenerDetallesCuentaPrestamo(req, res) {
        const { id } = req.params;
        const cuenta = storage.cuentasprestamo.find(c => c.id === id);
        if (cuenta) {
            res.send(cuenta);
        } else {
            res.status(404).send({ mensaje: 'Cuenta de préstamo no encontrada' });
        }
    }
}

module.exports = new PrestamosController();
