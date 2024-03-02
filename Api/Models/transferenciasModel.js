const mongoose = require('mongoose');
const { Schema } = mongoose;

const transferenciaSchema = new Schema({
    cuenta_origen: {
        type: Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true,
    },
    cuenta_destino: {
        type: Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true,
    },
    monto: {
        type: Number,
        required: true,
    },
    fecha_hora: {
        type: Date,
        default: Date.now,
    },
    estado: {
        type: String,
        enum: ['pendiente', 'completado', 'fallido'],
        default: 'pendiente',
    }
});

const Transferencia = mongoose.model('Transferencia', transferenciaSchema);
module.exports = Transferencia

