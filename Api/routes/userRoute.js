const express = require('express');
const { Router } = express;
const routes = Router();
const User = require('../Models/userModel')
const Tarjeta = require('../Models/tarjetasModel')
const Cuenta = require('../Models/cuentasModel');
const { createUsers,deleteUsers,deleteUser_Account,updateUsers } = require('../controllers/users');


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
    createUsers(req,res)
});

routes.put('/:id', async (req, res) => {
  updateUsers(req.params.id,req,res)
});


routes.delete('/:id', async (req, res) => {
   req = req.params.id
   deleteUsers(req,res)
});

routes.delete('/:id_user/cuenta/:id_cuenta', async (req, res) => {
    deleteUser_Account(req.params.id_user, req.params.id_cuenta,res)
});



module.exports = routes;