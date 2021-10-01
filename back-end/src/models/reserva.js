//Importamos mongoose
const mongoose = require('mongoose');

//Constante que nos representará mongoose
const Schema = mongoose.Schema;

//Creamos el objeto
const reservaSchema = new Schema({
    nombre: {
        type: String
    },
    telefono: {
        type: Number
    },
    email: {
        type: String
    }
}, {
    //colección que alojará
    collection: "reservas"
});

//Exportamos bajo este modelo de reserva
module.exports = mongoose.model('Reserva', reservaSchema);