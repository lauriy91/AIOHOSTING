//Importamos el modelo reserva
const usuario = require('../models/usuario');

class UsuarioController {

    constructor() {
    }

    //Método para crear un Usuario
    registrar(req, res) {
        //Enviamos los datos al cuerpo
        usuario.create(req.body, (error, data) =>{
            if(error) {
                //next(error);
                res.status(500).json({error});}
            else {
        //Retornamos mensaje de creacion con exito
                res.status(201).json(data);}
    });
    }

    //Consultar todos los Usuarios
    consultaUsuarios(req, res) {
        //Respuesta con todos los Usuarios
        usuario.find((error, data)=>{
            if (error){
                //next(error);
                res.status(500).json({error});}
            else {
                res.status(200).json(data);}
            });
    }

    //Metodo para consultar las usuario por ID (REVISAR)
    consultaUsuarioPorID(req, res) {
        let id = req.params.id;
        usuario.findById(id, (error, data)=>{
            if (error){
                res.status(500).json({error});}
            else {
                res.status(200).json(data);}
        });
    }
    
    //Actualizar usuario
    actualizarUsuario(req, res){
        let {id, username, password } = req.body;
        let objUsuario = {
            username,
            password
        }
        usuario.findByIdAndUpdate(id, {
            // con el $ set se actualiza el objeto
            $set: objUsuario}, 
            (error, data) => {
            if (error) {
            res.status(500).json({error});
            } else {
            res.status(200).json(data);
            }
        });
    }

    //Eliminar usuario
    eliminarUsuario(req, res){
        let {id} = req.body;
        //Eliminar un elemento por id del arreglo
        usuario.findByIdAndRemove(id, (error, data) => {
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
module.exports = UsuarioController;