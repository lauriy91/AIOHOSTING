const mongoose = require('mongoose');
const schema = mongoose.Schema;

const alojamientoSchema = new schema({
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
    },
    imagem:{
        type:null
    }
}, {
    collection: "alojamientos"
});

module.exports = mongoose.model('Alojamiento', alojamientoSchema);