
const Cuenta = require('../Models/userModel');

async function getCuentas() {
    try {
        const cuentas = await Cuenta.find();
        return cuentas;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getCuentas
}