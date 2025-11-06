const mongoose = require('mongoose');

const municipalitySchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    idDepartamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Municipality', municipalitySchema);