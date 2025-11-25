const mongoose = require('mongoose');

const collectionCenterSchema = new mongoose.Schema({
    idOrganizacion: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CollectionCenter', collectionCenterSchema);