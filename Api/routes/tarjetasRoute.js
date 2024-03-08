const express = require('express');
const {Router} = express;
const Tarjeta = require('../Models/tarjetasModel')
const routes = Router();

const {createTarejeta,deleteTarjeta,updateTarjeta} = require("../controllers/tarjeta")

routes.get('/', async (req, res) => {
    try {
        const result = await Tarjeta.find();
        res.json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const tarjeta = await Tarjeta.findById(req.params.id);
        if (!tarjeta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(tarjeta);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
});

routes.post('/:id_cuenta', async (req, res) => {
    createTarejeta(req.params.id_cuenta,req,res)
});

routes.delete('/:id_tarjeta', async (req, res) => {
   deleteTarjeta(req.params.id_tarjeta,req,res)
});


routes.put('/:id', async (req, res) => {
   updateTarjeta(req.params.id,req,res)
});

module.exports = routes;