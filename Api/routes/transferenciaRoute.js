const express = require('express');
const {Router} = express;
const Tansferencia = require('../Models/transferenciasModel')
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/transferenciasModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

routes.get('/', async (req, res) => {
    try {
        const result = await Tansferencia.find();
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
    try {
        const newTrans = await Transferencia.create(req.body);
        res.status(201).json(newTrans);
        
    } catch (error) {
        console.log('error')
        res.status(400).json({ message: error.message });
    }
});

routes.delete('/:id', async (req, res) => {
    try {
        const deletedTrans = await Transferencia.findByIdAndDelete(req.params.id);
        if (!deletedTrans) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const updatedTrans = await Transferencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTrans) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedTrans);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = routes;