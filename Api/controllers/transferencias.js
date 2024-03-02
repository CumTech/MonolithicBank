
const Transferencia = require('../Models/transferenciasModel');

async function getTransfgerencias() {
    try {
        const Transferencias = await Transferencia.find();
        return Transferencias;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getTransfgerencias
}