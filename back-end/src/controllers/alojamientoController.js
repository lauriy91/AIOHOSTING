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
        alojamiento.find((error, data) => {
            if (error) {
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
    actualizar(req, res){
        let {id, nombre, tipo, ubicacion, habitacion, tiempo_estadia, fecha_ingreso, precio, descripcion, imagen } = req.body;
        let objAlojamiento = {
            nombre,
            tipo,
            ubicacion,
            habitacion,
            tiempo_estadia,
            fecha_ingreso,
            precio, 
            descripcion,
            imagen
        }
        alojamiento.findByIdAndUpdate(id, {
            // con el $ set se actualiza el objeto
            $set: objAlojamiento}, 
            (error, data) => {
            if (error) {
            res.status(500).json({error});
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


    //Filtro nombre
    consultaPorNombre(req, res) {
        let nombre = req.params.nombre;
        alojamiento.find({ nombre: nombre }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }

    //Filtro tipo
    consultaPorTipo(req, res) {
        let tipo = req.params.tipo;
        alojamiento.find({ tipo: tipo }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }    

    //Filtro ubicacion
    consultaPorUbicacion(req, res) {
        let ubicacion = req.params.ubicacion;
        alojamiento.find({ ubicacion: ubicacion }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }   

    //Filtro alojamiento
    consultaPorHabitacion(req, res) {
        let habitacion = req.params.habitacion;
        alojamiento.find({ habitacion: habitacion }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }  

    //Filtro tiempo estadia
    consultaPorTEstadia(req, res) {
        let tiempo_estadia = req.params.tiempo_estadia;
        alojamiento.find({ tiempo_estadia: tiempo_estadia }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }  

    //Filtro fecha ingreso
    consultaPorFIngreso(req, res) {
        let fecha_ingreso = req.params.fecha_ingreso;
        alojamiento.find({ fecha_ingreso: fecha_ingreso }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }  

    //Filtro precio
    consultaPorPrecio(req, res) {
        let precio = req.params.precio;
        alojamiento.find({ precio: precio }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }  

}

//Exportamos el controlador que se pueda importar en alojamientoRouter
module.exports = AlojamientoController;
