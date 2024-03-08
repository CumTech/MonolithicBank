
const Transferencia = require('../Models/transferenciasModel');

async function getTransfgerencias() {
    try {
        const Transferencias = await Transferencia.find();
        return Transferencias;
    } catch (err) {
        throw err;
    }
}
async function createTransferencia(req,res){
    try {
        const { tarjeta_origen, tarjeta_destino, monto } = req.body;

        // Obtener la información de las tarjetas de origen y destino
        const tarjetaOrigen = await Tarjeta.findById(tarjeta_origen);
        const tarjetaDestino = await Tarjeta.findById(tarjeta_destino);

        // Verificar que las tarjetas existan
        if (!tarjetaOrigen || !tarjetaDestino) {
            return res.status(404).json({ message: 'Una o ambas tarjetas no existen' });
        }

        // Verificar que la tarjeta de origen tenga suficiente saldo
        if (tarjetaOrigen.saldo < monto) {
            // Crear un registro de transferencia con estado 'fallido'
            await Transferencia.create({
                tarjeta_origen: tarjeta_origen,
                tarjeta_destino: tarjeta_destino,
                monto: monto,
                estado: 'fallido'
            });
            return res.status(400).json({ message: 'La tarjeta de origen no tiene suficiente saldo para realizar la transferencia' });
        }

        // Realizar la transferencia
        tarjetaOrigen.saldo -= monto;
        tarjetaDestino.saldo += monto;

        // Guardar los cambios en las tarjetas
        await tarjetaOrigen.save();
        await tarjetaDestino.save();

        // Crear un registro de transferencia con estado 'completado'
        const transferencia = await Transferencia.create({
            tarjeta_origen: tarjeta_origen,
            tarjeta_destino: tarjeta_destino,
            monto: monto,
            estado: 'completado'
        });

        // Actualizar transacciones en las cuentas correspondientes
        const cuentaOrigen = await Cuenta.findOne({ tarjetas: tarjeta_origen });
        const cuentaDestino = await Cuenta.findOne({ tarjetas: tarjeta_destino });

        if (cuentaOrigen && cuentaDestino) {
            if(cuentaOrigen._id.equals(cuentaDestino._id)){
                cuentaOrigen.transacciones.push(transferencia._id);
                await cuentaOrigen.save();
            }else{
                cuentaOrigen.transacciones.push(transferencia._id);
                cuentaDestino.transacciones.push(transferencia._id);
                await cuentaOrigen.save();
                await cuentaDestino.save();
            }
        }

        res.status(200).json({ message: 'Transferencia realizada correctamente', transferencia: transferencia._id});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
async function deleteTransferencia(req,res){
    try {
        const deletedTrans = await Transferencia.findByIdAndDelete(req);
        if (!deletedTrans) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function updateTransferencia(id,req,res){
    try {
        const updatedTrans = await Transferencia.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTrans) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedTrans);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
module.exports = {
    getTransfgerencias,
    createTransferencia,
    deleteTransferencia,
    updateTransferencia
}