//Importamos express
const express = require('express');

//Importamos reservaController
const UsuarioController = require('../controllers/usuarioController');

class UsuarioRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //Se crea objeto de tipo serverController
        const objUsuarioC = new UsuarioController();
        //Se asigna a la ruta el método de consultarAlojamientos de serverController
        this.router.post("/usuarios", objUsuarioC.registrar);
        this.router.get("/usuarios", objUsuarioC.consultaUsuarios);
        this.router.get("/usuarios/:id", objUsuarioC.consultaUsuarioPorID);
        this.router.put("/usuarios", objUsuarioC.actualizarUsuario);
        this.router.delete("/usuarios", objUsuarioC.eliminarUsuario);
    }

}

module.exports = UsuarioRouter;