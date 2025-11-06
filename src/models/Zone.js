const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    idDistrito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District',
        required: true
    },
    idOrganizacion: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Zone', zoneSchema);