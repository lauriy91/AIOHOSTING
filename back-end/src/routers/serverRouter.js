const express = require('express');
//Importamos serverController
const serverController = require("../controllers/serverController");
const serverControllerReserva = require("../controllers/serverControllerReserva");
const { default: serverControllerUser } = require('../controllers/serverControllerUser');

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

    config(){
        //Se crea objeto de tipo serverController
        const objServerCR = new serverControllerReserva.default();
        //Se asigna a la ruta el método de consultarAlojamientos de serverController
        this.router.get("/consultarReserva", objServerCR.consultaTodasReserva);
        this.router.get("/consultarReserva/:id", objServerCR.consultaReservasPorID);
        this.router.post("/consultarReserva", objServerCR.crearReserva);
        this.router.put("/consultarReserva", objServerCR.actualizarReserva);
        this.router.delete("/consultarReserva", objServerCR.eliminarReserva);
    }
    config(){
        //Se crea objeto de tipo serverController
        const objServerU = new serverControllerUser.default();
        //Se asigna a la ruta el método para cambiar contraseña
        this.router.post("/consultarContrasenia", objServerU.crearReserva);
        this.router.put("/consultarContrasenia", objServerU.cambiarContrasenia);
    }
}

//Exportamos como default para que se pueda utilzar en cualquier modulo del proyecto - En este caso se va a llamar en el index
exports.default = ServerRouter;