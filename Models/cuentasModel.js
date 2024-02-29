const mongoose = require('mongoose');
const { Schema } = mongoose;

const cuentaSchema = new Schema({
    tipo_cuenta: {
        type: String,
        required: true,
    },
    saldo: {
        type: Number,
        required: true,
    },
    titulares: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    transacciones: [{
        type: Schema.Types.ObjectId,
        ref: 'Transferencia'
    }]
});

module.exports = (connection) => connection.model('Cuenta', cuentaSchema);
