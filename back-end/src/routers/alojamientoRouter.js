//Importamos express
const express = require('express');
//Importamos alojamientorController
const AlojamientoController = require('../controllers/alojamientoController');

//Creamos la clase
class AlojamientoRouter {

    //Constructor que ejecuta los métodos de la clase
    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        //Se crea objeto de tipo serverController
        const objAlojamientoC = new AlojamientoController();
        //Se asigna a la ruta el método de consultarAlojamientos de alojamientoController
        this.router.get("/alojamientos", objAlojamientoC.consultar);
        this.router.get("/alojamientos/:id", objAlojamientoC.consultaPorID);
        this.router.post("/alojamientos", objAlojamientoC.crear);
        this.router.put("/alojamientos", objAlojamientoC.actualizar);
        this.router.delete("/alojamientos", objAlojamientoC.eliminar);
        this.router.get("/alojamientos/nombre/:nombre", objAlojamientoC.consultaPorNombre);
        this.router.get("/alojamientos/tipo/:tipo", objAlojamientoC.consultaPorTipo);
        this.router.get("/alojamientos/ubicacion/:ubicacion", objAlojamientoC.consultaPorUbicacion);
        this.router.get("/alojamientos/alojamiento/:alojamiento", objAlojamientoC.consultaPorAlojamiento);
        this.router.get("/alojamientos/tiempo_estadia/:tiempo_estadia", objAlojamientoC.consultaPorTEstadia);
        this.router.get("/alojamientos/fecha_ingreso/:fecha_ingreso", objAlojamientoC.consultaPorFIngreso);
        this.router.get("/alojamientos/precio/:precio", objAlojamientoC.consultaPorPrecio);
    }

}

//Exportamos la ruta para que se pueda importar en el index
exports.default = AlojamientoRouter;