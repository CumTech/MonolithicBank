const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/tarjetasModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

routes.get('/tarjetas/', async (req, res) => {
   
});

routes.get('/tarjetas/:id', async (req, res) => {
   
});

routes.post('/tarjetas/', async (req, res) => {
   
});

routes.delete('/tarjetas/:id', async (req, res) => {
  
});

routes.put('/tarjetas/:id', async (req, res) => {
  
});

module.exports = routes;