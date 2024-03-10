// Description: Archivo principal de la aplicación
//-----------------Imports-----------------//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const htpp = require('http');

//-----------------App-----------------//
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/my-bank')
.then(() => {
    console.log('Conexión exitosa a MongoDB');
    app.listen(9000, () => {
        console.log('Server running on port 9000');
    });
})
.catch(err => console.error('Error de conexión a MongoDB', err));
//-----------------Middlewares-----------------//
app.use(bodyParser.json());
app.use(cors())

//-----------------Routes-----------------//
const cuentasRoute = require('./routes/cuentasRoute');
const tarjetasRoute = require('./routes/tarjetasRoute');
const transferenciaRoute = require("./routes/transferenciaRoute");
const userRoute = require("./routes/userRoute");

app.use("/v1/cuentas", cuentasRoute);
app.use("/v1/tarjetas", tarjetasRoute);
app.use("/v1/transferencias", transferenciaRoute);
app.use("/v1/user", userRoute);



app.get("/", (req, res) => {
    res.send("Welcome to the API of CumData the best shop in the world");
});

// server.listen(9000, () => {
//     console.log('Server running on port 9000');
// });

module.exports = app;