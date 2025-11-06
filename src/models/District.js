const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    idMunicipio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Municipality',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('District', districtSchema);