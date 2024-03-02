const express = require('express');
const {Router} = express;
const Tarjeta = require('../Models/tarjetasModel')
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/tarjetasModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

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

routes.post('/', async (req, res) => {
    try {
        const newtarjeta = await Tarjeta.create(req.body);
        res.status(201).json(newtarjeta);
    } catch (error) {
        console.log('error')
        res.status(400).json({ message: error.message });
    }
});

routes.delete('/:id', async (req, res) => {
    try {
        const deletedtarjeta = await Tarjeta.findByIdAndDelete(req.params.id);
        if (!deletedtarjeta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const updatedtarjeta = await Tarjeta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedtarjeta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedtarjeta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = routes;