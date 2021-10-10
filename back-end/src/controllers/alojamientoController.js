//Importamos el modelo reserva
const modeloAlojamiento = require('../models/alojamiento')
class AlojamientoController {

    constructor() {

    }

    //Crear Alojamiento
    async crear(req, res, next) {
        //Enviamos los datos al cuerpo
        let {nombre,tipo,puntuacion, ciudad, escenario,precio,tiempo_estadia,descripcion} = req.body
        const obj = new modeloAlojamiento({
            nombre,tipo,puntuacion, ciudad, escenario,precio,tiempo_estadia,descripcion
        })
        if(req.file){
            const {filename} = req.file
            obj.setImagen(filename)
        }
        const result = await obj.save()
        if (result) {
            res.status(201).json({"Guardado":"Todo Bien"})
        }
        next()
       /* alojamiento.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            }
            else {
                res.status(201).json(data);
            }
        });*/
    }

    //Consultar todos los Alojamientos
    consultar(req, res) {
        modeloAlojamiento.find((error, data)=>{
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
        modeloAlojamiento.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }
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
        let ciudad = req.params.ciudad;
        alojamiento.find({ ciudad: ciudad }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }   

    /*
    consultaPorHabitacion(req, res) {
        let habitacion = req.params.habitacion;
        alojamiento.find({ habitacion: habitacion }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json({ data });
            }
        });
    }  */

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

    //Actualizar Alojamiento
    actualizar(req, res) {
        let { id, nombre, tipo,puntuacion, ciudad,  escenario, precio, tiempo_estadia, descripcion } = req.body;
        let objAlojamiento = { 
            id, 
            nombre, 
            tipo,
            puntuacion, ciudad, 
            escenario, 
            precio, 
            tiempo_estadia, 
            descripcion }

        modeloAlojamiento.findByIdAndUpdate(id, {
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
        let id = req.params.id;
        modeloAlojamiento.findByIdAndRemove(id, (error, data) => {
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
