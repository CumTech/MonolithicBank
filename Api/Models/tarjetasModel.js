const mongoose = require('mongoose');
const { Schema } = mongoose;

const tarjetaSchema = new Schema({
    tipo: {
        type: String,
        required: true,
    },
    numero_tarjeta: {
        type: String,
        required: true,
    },
    mes_vencimiento: {
        type: String,
        required: true,
    },
    año_vencimiento: {
        type: String,
        required: true,
    },
    codigo_seguridad: {
        type: String,
        required: true,
    },
    cuenta_asociada: {
        type: Schema.Types.ObjectId,
        ref: 'Cuenta'
    },
    saldo: {
        type: Number,
        required: true,
        default: 0
    }
});

const Tarjeta = mongoose.model('Tarjeta', tarjetaSchema);
module.exports = Tarjeta;