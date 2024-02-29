// Description: Archivo principal de la aplicación
//-----------------Imports-----------------//
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const htpp = require('http');

//-----------------App-----------------//
const app = express();

//-----------------Middlewares-----------------//
app.use(bodyParser.json());
app.use(cors())

//-----------------Routes-----------------//
const cuentasRoute = require('./routes/cuentasRoute');
const tarjetasRoute = require('./routes/tarjetasRoute');
const transferenciaRoute = require("./routes/transferenciaRoute");
const userRoute = require("./routes/userRoute");

app.use("/cuentas", cuentasRoute);
app.use("/tarjetas", tarjetasRoute);
app.use("/transferencias", transferenciaRoute);
app.use("/user", userRoute);



app.get("/", (req, res) => {
    res.send("Welcome to the API of CumData the best shop in the world");
});
app.listen(9000, () => {
    console.log('Server running on port 9000');
});
// server.listen(9000, () => {
//     console.log('Server running on port 9000');
// });

module.exports = app;