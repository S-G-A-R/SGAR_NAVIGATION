const mongoose = require('mongoose');

const operatorLocationSchema = new mongoose.Schema({
    idHorario: {
        type: Number,
        required: true
    },
    idOperador: {
        type: Number,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number], //Longitud, Latitud
            required: true,
        },
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    timestamps: true
});

operatorLocationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('OperatorLocation', operatorLocationSchema);