const express = require('express');

const bodyparser = require('body-parser');
const cors = require("cors");

require('dotenv').config({path: 'variables.env'});
//Creación de servidor


const app = express();
require('./config/db');
app.use(cors());
app.use(express.json());
app.use(function(req,res,next){
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Credentials',true);
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
}
);


app.use('/api/registrados',require('./routes/registrado'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('cliente'));// Servidor node como estático

app.listen(process.env.PORT || 4000,() => 
{
    console.log("El servidor está corriendo")
})

module.exports = app;