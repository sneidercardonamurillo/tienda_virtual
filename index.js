const {conexion} =require("./database/conexion");
const express = require("express");
const cors = require("cors");

//inicializar la app
console.log("conexion en el app")

// conectar ala base de datos
conexion();

//crear el servidor de nodejs
const app = express();
const port = 3000;

// configurar el cors
app.use(cors());

//convertir body a objetos json
app.use(express.json());

// crear rutas

// crear servidor y escuchar
app.listen(port, ()=>{
    console.log("server coriendo en el ",port)
})