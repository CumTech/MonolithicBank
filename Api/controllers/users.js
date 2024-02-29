const mongoose = require('mongoose');
const userCreator = require('../Models/userModel');
const urlDB = "mongodb://localhost:27017"

async function getUsers (){
    const connection = await mongoose.createConnection(urlDB)
    try {
        const userModel = userCreator(connection);
        const data = await userModel.find();
        connection.close();
        return json(data);
        
    } catch (error) {
        connection.close();
        throw new Error(error)
    }
}

module.exports = {
    getUsers
}