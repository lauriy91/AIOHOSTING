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
    ubicacion: {
        type: String
    },
    alojamiento: {
        type: String
    },
    tiempo_estadia: {
        type: String
    },
    fecha_ingreso: {
        type: String
    }, 
    precio: {
        type: Number
    }, 
    descripcion: {
        type: String
    }, 
    imagen: {
        type: String
    }
}, {
    //colección que alojara
    collection: "alojamientos"
});

//Exportamos bajo este modelo de reserva
module.exports = mongoose.model('Alojamiento', alojamientoSchema);