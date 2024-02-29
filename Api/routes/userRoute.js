const express = require('express');
const { Router } = express;
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/userModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

const userContoller = require('../controllers/users')

routes.get('/user/', async (req, res) => {
    try {
        const result = await userContoller.getUsers(); // Si 'con' no está definido, asigna null
        res.json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }

});

routes.get('/user/:id', async (req, res) => {

});

routes.post('/user/', async (req, res) => {

});

routes.delete('/user/:id', async (req, res) => {

});

routes.put('/user/:id', async (req, res) => {

});

module.exports = routes;