const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/transferenciasModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

routes.get('/transferencia/', async (req, res) => {
   
});

routes.get('/transferencia/:id', async (req, res) => {
   
});

routes.post('/transferencia/', async (req, res) => {
   
});

routes.delete('/transferencia/:id', async (req, res) => {
  
});

routes.put('/transferencia/:id', async (req, res) => {
  
});

module.exports = routes;