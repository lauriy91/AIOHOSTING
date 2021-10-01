//Importamos mongoose
const mongoose = require('mongoose');

//constante que nos representara mongoose
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
}, {
    //colección donde se alojaran
    collection: "usuarios"
});

//exportamos bajo este modelo
module.exports = mongoose.model('Usuario', usuarioSchema);