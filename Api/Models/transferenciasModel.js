const mongoose = require('mongoose');
const { Schema } = mongoose;

const transferenciaSchema = new Schema({
    tarjeta_origen: {
        type: Schema.Types.ObjectId,
        ref: 'Tarjeta',
        required: true,
    },
    tarjeta_destino: {
        type: Schema.Types.ObjectId,
        ref: 'Tarjeta',
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
        enum: ['completado', 'fallido'],
    }
});

const Transferencia = mongoose.model('Transferencia', transferenciaSchema);
module.exports = Transferencia

