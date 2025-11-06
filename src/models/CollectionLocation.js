const mongoose = require('mongoose');

const collectionLocationSchema = new mongoose.Schema({
    idObjectId: {
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
    descripcion: {
        type: String
    },
    horaApertura: {
        type: String,
        required: true
    },
    horaCierre: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CollectionLocation', collectionLocationSchema);