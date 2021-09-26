    //JSON con información de las reservas
    var reservas = [{
   id: 1, nombre: "Andrea Villada", telefono: "111111", email: "andre@gmail.com"
}, {
   id: 2, nombre: "Francisco Petrizzo", telefono: "222222", email: "francisco@gmail.com"
}, {
   id: 3, nombre: "Freddy Lopez", telefono: "333333", email: "freddy@gmail.com"
}, {
   id: 4, nombre: "Hugo Ramirez", telefono: "444444", email: "hugo@gmail.com"
}, {
   id: 5, nombre: "Laura Rodriguez", telefono: "555555", email: "laura@gmail.com"
}
]

class ServerControllerReserva {
    constructor() {
}
    //Método para crear la reserva
    crearReserva(req, res) {
        //Enviamos los datos al cuerpo
        reservas.push(req.body);
        //Retornamos mensaje de creacion con exito
        res.status(201).json({ message: "Reserva creada con exito" });
    }

    //Consultar todos las Reservas
    consultaTodasReserva(req, res) {
        //Respuesta con todos las Reservas
        res.status(200).json(reservas);
    }

        //Metodo para consultar las reservas por ID
        consultaReservasPorID(req, res) {
            // Mensaje en consola
            console.log("Consultando id de reserva");
            let id = req.params.id;
            //Creamos variable para la respuesta
            let reservaResp = null;
            reservas.forEach(element => {
                if (id == element.id) {
                    reservaResp = element;
                }
            });
    
            if (reservaResp != null) {
                res.status(200).json(reservaResp);
            } else {
                res.status(404).json({ message: "Numero de reserva no encontrado" });
            }
        }
    
    //Actualizar reservas
    actualizarReserva(req, res){
        let {id, nombre, telefono, email} = req.body;
        reservas.forEach(element=>{
            if (id == element.id){
                element.nombre = nombre;
                element.telefono = telefono;
                element.email = email; 
            }
        });
        res.status(200).json({message: "Actualizacion con exito"});
    }

    //Eliminar reserva
    eliminarReserva(req, res){
        let {id} = req.body;
        //Eliminar un elemento por id del arreglo
        let tempReserva = [];
        reservas.forEach(element =>{
            if(element.id != id){
                tempReserva.push(element);
            }
        });

        reservas = tempReserva;
        res.status(200).json({message: "Eliminación completada"})

    }   
}

//Exportamos como default para que se pueda utilizar desde cualquier modulo del proyecto
exports.default = ServerControllerReserva;