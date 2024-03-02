const express = require('express');
const {Router} = express;


const Cuenta = require('../Models/cuentasModel')
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/cuentasModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

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
    try {
        const newCuenta = await Cuenta.create(req.body);
        res.status(201).json(newCuenta);
    } catch (error) {
        console.log('error')
        res.status(400).json({ message: error.message });
    }
});

routes.delete('/:id', async (req, res) => {
    try {
        const deletedCuenta = await Cuenta.findByIdAndDelete(req.params.id);
        if (!deletedCuenta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const updatedCuenta = await Cuenta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCuenta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedCuenta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = routes;