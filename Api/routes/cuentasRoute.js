const express = require('express');
const {Router} = express;
const Cuenta = require('../Models/cuentasModel')


const routes = Router();


const { createCuenta,deleteCuentas ,updateCuenta} = require('../controllers/cuentas');

routes.get('/', async (req, res) => {
    try {
        const result = await Cuenta.find();
        res.json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const cuentas = await Cuenta.findById(req.params.id);
        if (!cuentas) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(cuentas);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
});

routes.post('/', async (req, res) => {
    createCuenta(req,res)
});


routes.delete('/:id', async (req, res) => {
    deleteCuentas(req.params.id,req,res);
});

routes.put('/:id', async (req, res) => {
    updateCuenta(req.params.id,req,res)
});




module.exports = routes;