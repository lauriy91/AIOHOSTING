//Importamos express
const express = require('express');

//Importamos reservaController
const ReservaController = require('../controllers/reservaController');

class ReservaRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //Se crea objeto de tipo serverController
        const objReservaC = new ReservaController();
        //Se asigna a la ruta el método de consultarAlojamientos de serverController
        this.router.post("/reservas", objReservaC.registrar);
        this.router.get("/reservas", objReservaC.getAllUsers);
        this.router.get("/reservas/:id", objReservaC.getUserById);
        this.router.put("/reservas", objReservaC.update);
        this.router.delete("/reservas", objReservaC.delete);
    }

}

module.exports = ReservaRouter;