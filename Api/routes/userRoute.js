const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const CuentaModelCreator = require('../Models/userModel');
const routes = Router();
const urlDB = "mongodb://localhost:27017"

routes.get('/user/', async (req, res) => {
   
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