
const Tarjeta = require('../Models/userModel');

async function getTarjetas() {
    try {
        const Tarjetas = await Tarjeta.find();
        return Tarjetas;
    } catch (err) {
        throw err;
    }
}
async function createTarejeta(id_cuenta,req,res){
    try {
        // Verificar si la cuenta existe
        const cuenta = await Cuenta.findById(id_cuenta);
        if (!cuenta) {
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        }

        // Crear una nueva tarjeta
        const nuevaTarjeta = new Tarjeta({
            tipo: req.body.tipo,
            numero_tarjeta: req.body.numero_tarjeta,
            mes_vencimiento: req.body.mes_vencimiento,
            año_vencimiento: req.body.año_vencimiento,
            codigo_seguridad: req.body.codigo_seguridad,
            cuenta_asociada: id_cuenta,
            saldo: req.body.saldo,
        });

        // Guardar la nueva tarjeta
        await nuevaTarjeta.save();

        // Agregar la nueva tarjeta a la lista de tarjetas de la cuenta
        cuenta.tarjetas.push(nuevaTarjeta._id);
        await cuenta.save();

        res.status(201).json({ message: 'Nueva tarjeta agregada a la cuenta', tarjeta: nuevaTarjeta });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
async function deleteTarjeta(id_tarjeta,req,res){
    try {
        // Verificar si la tarjeta existe
        const tarjeta = await Tarjeta.findById(id_tarjeta);
        if (!tarjeta) {
            return res.status(404).json({ message: 'Tarjeta no encontrada' });
        }

        // Obtener el ID de la cuenta asociada a la tarjeta
        const idCuenta = tarjeta.cuenta_asociada;

        // Actualizar el tipo de la tarjeta a "debito_inactiva"
        await Tarjeta.findByIdAndUpdate(id_tarjeta, { tipo: 'debito_inactiva' });

        // Quitar la tarjeta de la lista de tarjetas de la cuenta
        const cuenta = await Cuenta.findById(idCuenta);
        if (cuenta) {
            cuenta.tarjetas = cuenta.tarjetas.filter(tarjetaId => tarjetaId.toString() !== id_tarjeta);
            await cuenta.save();
        }

        res.json({ message: 'Tarjeta desasociada de la cuenta y marcada como "debito_inactiva"' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
async function updateTarjeta(id,req,res){
    try {
        const updatedtarjeta = await Tarjeta.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedtarjeta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedtarjeta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
module.exports = {
    getTarjetas,
    createTarejeta,
    deleteTarjeta,
    updateTarjeta
}