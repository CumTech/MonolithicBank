const express = require('express');
const { Router } = express;
const routes = Router();
const User = require('../Models/userModel')
const Tarjeta = require('../Models/tarjetasModel')
const Cuenta = require('../Models/cuentasModel')


routes.get('/', async (req, res) => {
    try {
        const result = await User.find();
        res.json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
});

routes.get('/tarjetas/:id', async (req, res) => {
    try {
        // Buscar el usuario por su ID
        const user = await User.findById(req.params.id);
        
        // Verificar si el usuario existe
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Buscar las tarjetas asociadas al usuario
        const tarjetas = await Tarjeta.find({ cuenta_asociada: { $in: user.cuentas } });
        
        // Devolver las tarjetas encontradas
        res.json(tarjetas);
    } catch (error) {
        // Manejar errores
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

routes.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log('error')
        res.status(400).json({ message: error.message });
    }
});


routes.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


routes.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

routes.delete('/:id_user/cuenta/:id_cuenta', async (req, res) => {
    try {
        const user = await User.findById(req.params.id_user);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const cuenta = await Cuenta.findById(req.params.id_cuenta);
        if (!cuenta) {
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        }

        // Verificar si la cuenta está asociada al usuario
        const cuentaIndex = user.cuentas.findIndex(cuentaId => cuentaId.toString() === req.params.id_cuenta);
        if (cuentaIndex === -1) {
            return res.status(404).json({ message: 'La cuenta no está asociada a este usuario' });
        }

        // Quitar la cuenta de la lista de cuentas del usuario
        user.cuentas.pull(req.params.id_cuenta);
        await user.save();

        // Quitar al usuario de la lista de titulares de la cuenta
        cuenta.titulares.pull(req.params.id_user);
        await cuenta.save();

        // Verificar si todavía hay titulares en la cuenta
        if (cuenta.titulares.length === 0) {
            cuenta.tipo_cuenta += '_inactiva';
            await cuenta.save();
        }

        res.json({ message: 'Cuenta eliminada correctamente del usuario' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



module.exports = routes;