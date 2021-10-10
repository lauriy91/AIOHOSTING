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
        this.router.get("/reservas", objReservaC.consultaTodasReserva);
        this.router.get("/reservas/:id", objReservaC.consultaReservasPorID);
        this.router.put("/reservas", objReservaC.actualizarReserva);
        this.router.delete("/reservas", objReservaC.eliminarReserva);
    }

}

module.exports = ReservaRouter;