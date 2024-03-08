const express = require('express');
const { Router } = express;
const routes = Router();
const User = require('../Models/userModel')
const { createUsers,deleteUsers,deleteUser_Account,updateUsers,getTarjetasByIdUsers } = require('../controllers/users');


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
   getTarjetasByIdUsers(req.params.id, res)
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