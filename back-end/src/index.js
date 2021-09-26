//Importar express
const express = require('express');
//Importamos serverRouters
const serverRouter = require('./routers/serverRouter');

class Server{
    constructor(){
        //Variable que hace referencia al servidor.
        this.app = express();
        //Indicar el puerto por el que se ejecutará el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que las solicitudes http se trabajará con JSON
        this.app.use(express.json());
        //Rutas 
        const router = express.Router();
        router.get('/', (req, res)=>{
            console.log("¡Conexión exitosa!");
            res.status(200).json({message: "¡Conexión exitosa!"});
        });

        //Después de importar serverRouters creamos el objeto serverR
        const serverR = new serverRouter.default();
        //Añadir las rutas al servidor
        this.app.use(serverR.router);
        this.app.use(router);

        //El servidor utiliza la ruta que se creó previamente
        this.app.use(router);
        //Levantar o correr el servidor
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }
}

const objServer = new Server();