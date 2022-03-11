const express = require('express');

const bodyparser = require('body-parser');
const cors = require("cors");

require('dotenv').config({path: 'variables.env'});
//Creación de servidor


const app = express();
require('./config/db');
app.use(cors());
app.use(express.json());


app.use('/api/registrados',require('./routes/registrado'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('cliente'));

app.listen(process.env.PORT || 4000,() => 
{
    console.log("El servidor está corriendo")
})

module.exports = app;