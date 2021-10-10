//Importamos mongoose
const mongoose = require('mongoose');
const data = require('../serverConfig')
//Constante que nos representará mongoose
const Schema = mongoose.Schema;

//Creamos el objeto
const alojamientoSchema = new Schema({
    nombre: String,
    tipo:String,
    puntuacion:Number,
    ciudad: String,
    escenario:Array,
    imagen:String,
    precio:Number,
    tiempo_estadia:String,
    descripcion:String
}, {
    //colección que alojará
    collection: "alojamientos"
});

alojamientoSchema.methods.setImagen = function setImagen(filename) {
    this.imagen = `${data.serverConfig.host}:${data.serverConfig.port}/public/${filename}`
}
const modeloAlojamiento = mongoose.model('alojamientos', alojamientoSchema)
//Exportamos bajo este modelo de reserva
module.exports = modeloAlojamiento;