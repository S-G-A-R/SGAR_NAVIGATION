const mongoose = require('mongoose');

const operatorLocationSchema = new mongoose.Schema({
    idCiudadano: {
        type: Number,
        required: true
    },
    idOperador: {
        type: Number,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    estado: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('OperatorLocation', operatorLocationSchema);