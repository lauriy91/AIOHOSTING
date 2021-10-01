//Importamos el modelo reserva
const alojamiento = require('../models/alojamiento')


class AlojamientoController {

    constructor() {

    }

    //Crear Alojamiento
    crear(req, res) {
        //Enviamos los datos al cuerpo
        alojamiento.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            }
            else {
                res.status(201).json(data);
            }
        });
    }

    //Consultar todos los Alojamientos
    consultar(req, res) {
        alojamiento.find((error, data)=>{
            if (error){
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    //Consultar Alojamiento por ID
    consultaPorID(req, res) {
        let id = req.params.id;
        alojamiento.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    //Actualizar Alojamiento
    actualizar(req, res) {
        let { id, nombre, tipo, escenario, precio, tiempo_estadia, descripcion } = req.body;
        let objAlojamiento = { 
            id, 
            nombre, 
            tipo, 
            escenario, 
            precio, 
            tiempo_estadia, 
            descripcion }

        alojamiento.findByIdAndUpdate(id, {
            $set: objAlojamiento
        }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    //Eliminar Alojamiento
    eliminar(req, res) {
        let { id } = req.body;
        alojamiento.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

//Exportamos el controlador que se pueda importar en alojamientoRouter
module.exports = AlojamientoController;
