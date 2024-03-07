const mongoose = require('mongoose');
const { Schema } = mongoose;

const cuentaSchema = new Schema({
    tipo_cuenta: {
        type: String,
        required: true,
    },
/*    saldo: {
        type: Number,
        required: true,
    },*/
    titulares: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    tarjetas: [{
        type: Schema.Types.ObjectId,
        ref: 'Tarjeta'
    }],
    transacciones: [{
        type: Schema.Types.ObjectId,
        ref: 'Transferencia'
    }]
});

const Cuenta = mongoose.model('Cuenta', cuentaSchema);
module.exports = Cuenta
