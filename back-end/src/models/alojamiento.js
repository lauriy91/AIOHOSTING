//Importamos mongoose
const mongoose = require('mongoose');
//Constante que nos representará mongoose
const Schema = mongoose.Schema;

//Creamos el objeto
const alojamientoSchema = new Schema({
    nombre: {
        type: String
    },
    tipo: {
        type: String
    },
    escenario: {
        type: String
    },
    precio: {
    type: Number
    },
    tiempo_estadia:{
        type: String 
    },
    descripcion:{
        type:String
    }
}, {
    //colección que alojará
    collection: "alojamientos"
});

//Exportamos bajo este modelo de reserva
module.exports = mongoose.model('Alojamiento', alojamientoSchema);