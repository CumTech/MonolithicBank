const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/cuentasModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

routes.get('/cuentas/', async (req, res) => {
   
});

routes.get('/cuentas/:id', async (req, res) => {
   
});

routes.post('/cuentas/', async (req, res) => {
   
});

routes.delete('/cuentas/:id', async (req, res) => {
  
});

routes.put('/cuentas/:id', async (req, res) => {
  
});

module.exports = routes;