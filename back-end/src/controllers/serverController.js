    //JSON con información de los alojamientos
    var alojamientos = [{
    id: 1, nombre: "Hostal Wiwa", tipo: "Coworking", escenario: "Urbano", precio: "800.000", tiempo_estadia: "8h", descripcion: "Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación.El Wi- Fi y el estacionamiento son gratuitos. El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o salir de rumba en la discoteca Rezak Bar Club.Además encontrará club para niños y adolescentes, con pelotero y videojuegos.El staff de recreación organiza clases de baile, entre otras actividades.", imagen: "null"
}, {
    id: 2, nombre: "Hostal Americas", tipo: "Coworking", escenario: "Urbano", precio: "400.000", tiempo_estadia: "4h", descripcion: "Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación. El Wi-Fi y el estacionamiento son gratuitos. El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o salir de rumba en la discoteca Rezak Bar Club. Además encontrará club para niños y adolescentes, con pelotero y videojuegos. El staff de recreación organiza clases de baile, entre otras actividades.", imagen: "null"
}, {
    id: 3, nombre: "Hostel Costa", tipo: "Coliving", escenario: "Rural", precio: "800.000", tiempo_estadia: "15d", descripcion: "Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación. El Wi-Fi y el estacionamiento son gratuitos.El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o salir de rumba en la discoteca Rezak Bar Club. Además encontrará club para niños y adolescentes, con pelotero y videojuegos. El staff de recreación organiza clases de baile, entre otras actividades", imagen: "null"
}, {
    id: 4, nombre: "Hotel Tequendama", tipo: "Coliving", escenario: "Rural", precio: "400.000", tiempo_estadia: "7d", descripcion: "Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación. El Wi-Fi y el estacionamiento son gratuitos. El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o salir de rumba en la discoteca Rezak Bar Club. Además encontrará club para niños y adolescentes, con pelotero y videojuegos. El staff de recreación organiza clases de baile, entre otras actividades.", imagen: "null"
}]


class ServerController {
    constructor() {

    }

    //Método para crear alojamiento
    crearAlojamiento(req, res) {
        //Enviamos los datos al cuerpo
        alojamientos.push(req.body);
        //Retornamos mensaje de creacion con exito
        res.status(201).json({ message: "Alojamiento creado con exito" });
    }


    //Consultar todos los alojamientos
    consultAlojamiTodos(req, res) {
        //Respuesta con todos los alojamientos
        res.status(200).json({alojamientos});
    }

        //Metodo para consultar los alojamientos por ID
        consultAlojamiPorID(req, res) {
            // Mensaje en consola
            console.log("Consultando alojamientos");
            let id = req.params.id;
            //Creamos variable para la respuesta
            let alojamientoResp = null;
            alojamientos.forEach(element => {
                if (id == element.id) {
                    alojamientoResp = element;
                }
            });
    
            if (alojamientoResp != null) {
                res.status(200).json(alojamientoResp);
            } else {
                res.status(404).json({ message: "Alojamiento no encontrado" });
            }
        }
    

    //Actualizar alojamientos
    actualizarAlojamiento(req, res){
        let {id, nombre, tipo, escenario, precio, tiempo_estadia, descripcion, imagen} = req.body;
        alojamientos.forEach(element=>{
            if (id == element.id){
                element.nombre = nombre;
                element.tipo = tipo;
                element.escenario = escenario; 
                element.precio = precio;
                element.tiempo_estadia = tiempo_estadia;
                element.descripcion = descripcion;
                element.imagen = imagen;
            }
        });
        res.status(200).json({message: "Actualizacion con exito"});
    }

    //Eliminar alojamientos
    eliminarAlojamiento(req, res){
        let {id} = req.body;
        //Eliminar un elemento por id del arreglo
        let tempAlojamiento = [];
        alojamientos.forEach(element =>{
            if(element.id != id){
                tempAlojamiento.push(element);
            }
        });

        alojamientos = tempAlojamiento;
        res.status(200).json({message: "Eliminación completada"})

    }   

}


//Exportamos como default para que se pueda utilizar desde cualquier modulo del proyecto
exports.default = ServerController;
