//Importamos el modelo reserva
const reserva = require('../models/reserva')
    
//JSON con información de las reservas
var reservas = [
    {id: 1, nombre: "Andrea Villada", telefono: "111111", email: "andre@gmail.com"}, 
    {id: 2, nombre: "Francisco Petrizzo", telefono: "222222", email: "francisco@gmail.com"}, 
    {id: 3, nombre: "Freddy Lopez", telefono: "333333", email: "freddy@gmail.com"}, 
    {id: 4, nombre: "Hugo Ramirez", telefono: "444444", email: "hugo@gmail.com"}, 
    {id: 5, nombre: "Laura Rodriguez", telefono: "555555", email: "laura@gmail.com"}
]

class ReservaController{

    constructor() {
    }

    //Método para crear la reserva
    crearReserva(req, res) {
        //Enviamos los datos al cuerpo
        reservas.create(req.body, (error, data) =>{
            if(error) {
                //next(error);
                res.status(500).send()}
            else {
        //Retornamos mensaje de creacion con exito
                res.status(201).json({ message: "Reserva creada con exito" });}
    });
    }

    //Consultar todos las Reservas
    consultaTodasReserva(req, res) {
        //Respuesta con todos las Reservas
        reservas.find((error, data)=>{
            if (error){
                //next(error);
                res.status(500).send();}
            else {
                res.status(200).json({message: "Resultado de todas las reservas"});}
            });
    }

    //Metodo para consultar las reservas por ID
    consultaReservasPorID(req, res) {
        let id = req.params.id;
        reservas.findById(id, (error, data)=>{
            if (error){
                res.status(500).send();}
            else {
                res.status(200).json({message: "Resultado de todas las reservas"});}
        });
    }
    
    //Actualizar reservas
    actualizarReserva(req, res){
        let {id, nombre, telefono, email} = req.body;
        let obj = {
            nombre,
            telefono,
            email
        }
        reservas.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
            res.status(500).send();
            } else {
            res.status(200).json({message: "Actualizacion con exito"});
            }
        });
    }

    //Eliminar reserva
    eliminarReserva(req, res){
        let {id} = req.body;
        //Eliminar un elemento por id del arreglo
        reservas.findByIdAndRemove(id, (error, data) => {
            if(error){
                res.status(500).send();
            }
            else{
                res.status(200).json({message: "Reserva eliminada con exito"});
            } 
        });

    }   
}

//Exportamos como default para que se pueda utilizar desde cualquier modulo del proyecto
module.exports = ReservaController;