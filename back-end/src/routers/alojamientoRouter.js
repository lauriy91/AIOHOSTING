//Importamos express
const express = require('express');

//Importamos alojamientorController
const AlojamientoController = require('../controllers/alojamientoController');

//Cramos la clase
class AlojamientoRouter{
    //Constructor que ejecuta los métodos de la clase
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //Se crea objeto de tipo serverController
        const objAlojamientoC = new AlojamientoController();
        //Se asigna a la ruta el método de consultarAlojamientos de alojamientoController
        this.router.get("/consultarAlojamiento", objAlojamientoC.consultAlojamiTodos);
        this.router.get("/consultarAlojamiento/:id", objAlojamientoC.consultAlojamiPorID);
        this.router.post("/consultarAlojamiento", objAlojamientoC.crearAlojamiento);
        this.router.put("/consultarAlojamiento", objAlojamientoC.actualizarAlojamiento);
        this.router.delete("/consultarAlojamiento", objAlojamientoC.eliminarAlojamiento);
    }

}

//Exportamos como default para que se pueda utilzar en cualquier modulo del proyecto - En este caso se va a llamar en el index
exports.default = AlojamientoRouter;