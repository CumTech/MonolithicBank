
const Tarjeta = require('../Models/userModel');

async function getTarjetas() {
    try {
        const Tarjetas = await Tarjeta.find();
        return Tarjetas;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getTarjetas
}