//Importar mongoose
const mongoose = require('mongoose');

//Importar url de conexión a la BD
const database = require('./urlDatabase');

//Crear una clase para la conexión a la BD
class DatabaseConnection {

    //Creamos un constructor
    constructor() {
        //Generar conexión a la BD indicando la url de conexión
        mongoose.connect(database.db).then(() => {
            console.log("Conexión exitosa a la BD");
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
}

//Exportar la clase para que pueda ser usada desde otro fichero/clase
module.exports = DatabaseConnection;