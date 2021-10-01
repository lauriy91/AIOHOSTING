//Importar express
const express = require("express");
//Importar mongoose
const mongoose = require('mongoose');
//Importamos la conexión a la BD
const DatabaseConnection = require("./database/databaseConnection");
//Importamos las rutas
const AlojamientoRouter = require('./routers/alojamientoRouter');
const UsuarioRouter = require('./routers/usuarioRouter');
const ReservaRouter = require('./routers/reservaRouter');


//Levantamos el servidor
class Server{
    constructor(){
        //Construimos un objeto de conexion a la BD
        const dbConnection = new DatabaseConnection();
        //Variable que hace referencia al servidor, crea app express
        this.app = express();
        //Configuramos parametros de express para levantar el servidor
        this.config();
    }

    config(){
        //Indicar el puerto por el que se ejecutará el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar el uso del formato json para enviar informacion con JSON
        this.app.use(express.json());
        //Configurar ruta raíz
        let router = express.Router();
        router.get('/', (req, res) => {
            console.log("¡Conexión exitosa!");
            res.status(200).json({message: "¡Conexión exitosa!"});
        });

        /*** CREAR RUTAS ***/

        //Creamos rutas. Después de importar serverRouters creamos el objeto serverR
        const alojamientoRouter = new AlojamientoRouter.default();
        const usuarioRouter = new UsuarioRouter();
        const reservaRouter = new ReservaRouter();
        //Añadir la rutas al servidor El servidor utiliza la ruta que se creó previamente
        this.app.use(router);
        this.app.use(alojamientoRouter.router);
        this.app.use(reservaRouter.router);
        this.app.use(usuarioRouter.router);
        //Levantar el servidor y ponerlo a la escucha
        this.app.listen( this.app.get('port'), ()=>{
            console.log("Corriendo por el puerto =>", this.app.get('port'));
        });
    }

    conectarBD(){
        //mongoose.Promise = global.Promise;
        mongoose.connect(database.db).then(()=>{
            console.log("Conexión a BD con éxito");
        }).catch((error)=>{
            console.error("Error de conexión");
        });
    }

}

const obj = new Server();