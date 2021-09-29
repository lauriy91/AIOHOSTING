//Importamos el modelo reserva
const usuario = require('../models/usuario')

//JSON con información de los usuarios
var usuarios = [{
    id: 1, username: "Aiohosting", password: "xxxxxx", emailUser: "user@gmail.com"
 }
 ]
 
 class UsuarioController{

    constructor() {
    }

    //Método para crear un Usuario
    crearUsuario(req, res) {
        //Enviamos los datos al cuerpo
        usuarios.create(req.body, (error, data) =>{
            if(error) {
                //next(error);
                res.status(500).send()}
            else {
        //Retornamos mensaje de creacion con exito
                res.status(201).json({ message: "Usuario creado con exito" });}
    });
    }

    //Consultar todos los Usuarios
    consultaTodosUsuarios(req, res) {
        //Respuesta con todos los Usuarios
        usuarios.find((error, data)=>{
            if (error){
                //next(error);
                res.status(500).send();}
            else {
                res.status(200).json({message: "Resultado de todos los usuarios"});}
            });
    }

    //Metodo para consultar las usuario por ID
    consultaUsuarioPorID(req, res) {
        let id = req.params.id;
        usuarios.findById(id, (error, data)=>{
            if (error){
                res.status(500).send();}
            else {
                res.status(200).json({message: "Resultado de todas los usuarios"});}
        });
    }
    
    //Actualizar usuario
    actualizarUsuario(req, res){
        let {id, username, password, emailUser} = req.body;
        let obj = {
            username,
            password,
            emailUser
        }
        usuarios.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
            res.status(500).send();
            } else {
            res.status(200).json({message: "Actualizacion con exito"});
            }
        });
    }

    //Eliminar usuario
    eliminarUsuario(req, res){
        let {id} = req.body;
        //Eliminar un elemento por id del arreglo
        usuarios.findByIdAndRemove(id, (error, data) => {
            if(error){
                res.status(500).send();
            }
            else{
                res.status(200).json({message: "Eliminación con exito"});
            } 
        });

    }   
}

//Exportamos como default para que se pueda utilizar desde cualquier modulo del proyecto
module.exports = UsuarioController;