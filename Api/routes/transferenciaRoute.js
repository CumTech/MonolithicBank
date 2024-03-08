const express = require('express');
const {Router} = express;
const Transferencia = require('../Models/transferenciasModel')
const Tarjeta = require('../Models/tarjetasModel')
const Cuenta = require('../Models/cuentasModel')
const {createTransferencia,deleteTransferencia,updateTransferencia}  = require("../controllers/transferencias")
const routes = Router();


routes.get('/', async (req, res) => {
    try {
        const result = await Transferencia.find();
        res.json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const trans = await Transferencia.findById(req.params.id);
        if (!trans) {
            return res.status(404).json({ message: 'Tansferencia no encontrado' });
        }
        res.json(trans);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
});

routes.post('/', async (req, res) => {
  createTransferencia(req,res)
});


routes.delete('/:id', async (req, res) => {
    deleteTransferencia(req.params.id,res)
});

routes.put('/:id', async (req, res) => {
    updateTransferencia(req.params.id, req, res)
});

module.exports = routes;