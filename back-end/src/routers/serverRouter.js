const express = require('express');
//Importamos serverController
const serverController = require("../controllers/serverController");

class ServerRouter{
    //Constructor que ejecuta los métodos de la clase
    constructor(){

        this.router = express.Router();
        this.config();
    }

    config(){
        //Se crea objeto de tipo serverController
        const objServerC = new serverController.default();
        //Se asigna a la ruta el método de consultarAlojamientos de serverController
        this.router.get("/consultarAlojamiento", objServerC.consultAlojamiTodos);
        this.router.get("/consultarAlojamiento/:id", objServerC.consultAlojamiPorID);
        this.router.post("/consultarAlojamiento", objServerC.crearAlojamiento);
        this.router.put("/consultarAlojamiento", objServerC.actualizarAlojamiento);
        this.router.delete("/consultarAlojamiento", objServerC.eliminarAlojamiento);
    }

}

//Exportamos como default para que se pueda utilzar en cualquier modulo del proyecto - En este caso se va a llamar en el index
exports.default = ServerRouter;