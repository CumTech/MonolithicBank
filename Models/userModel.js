const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    },
    direccion: String,
    telefono: String,
    correo: {
        type: String,
        required: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    cuentas: [{
        type: Schema.Types.ObjectId,
        ref: 'Cuenta'
    }]
});

module.exports = (connection) => connection.model('User', userSchema);