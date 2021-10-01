//Importamos el modelo reserva
const reserva = require('../models/reserva');
    
class ReservaController{

    constructor() {
    }

    //Método para crear la reserva
    registrar(req, res) {
        //Enviamos los datos al cuerpo
        reserva.create(req.body, (error, data) =>{
            if(error) {
                //next(error);
                res.status(500).json({error});}
            else {
        //Retornamos mensaje de creacion con exito
                res.status(201).json(data);}
    });
    }

    //Consultar todos las Reservas
    consultaTodasReserva(req, res) {
        //Respuesta con todos las Reservas
        reserva.find((error, data)=>{
            if (error){
                //next(error);
                res.status(500).json({error});}
            else {
                res.status(200).json(data);}
            });
    }

    //Metodo para consultar las reservas por ID
    consultaReservasPorID(req, res) {
        let id = req.params.id;
        reserva.findById(id, (error, data)=>{
            if (error){
                res.status(500).json({error});}
            else {
                res.status(200).json(data);}
        });
    }
    
    //Actualizar reservas
    actualizarReserva(req, res){
        let {id, nombre, telefono, email} = req.body;
        let objReserva = {
            nombre,
            telefono,
            email
        }
        reserva.findByIdAndUpdate(id, {
            // $set comando para actualizar el objeto
            $set: objReserva}, 
            (error, data) => {
            if (error) {
            res.status(500).json({error});} 
            else {
            res.status(200).json(data);
            }
        });
    }

    //Eliminar reserva
    eliminarReserva(req, res){
        let {id} = req.body;
        //Eliminar un elemento por id del arreglo
        reserva.findByIdAndRemove(id, (error, data) => {
            if(error){
                res.status(500).json({error});
            }
            else{
                res.status(200).json(data);
            } 
        });

    }   
}

//Exportamos como default para que se pueda utilizar desde cualquier modulo del proyecto
module.exports = ReservaController;