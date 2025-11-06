const mongoose = require('mongoose');

const locationNotificationSchema = new mongoose.Schema({
    idUbicacion: {
        type: Number,
        required: true
    },
    idCiudadano: {
        type: Number,
        required: true
    },
    distanciaMetros: {
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
    fechaActualizacion: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('LocationNotification', locationNotificationSchema);