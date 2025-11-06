const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Department', departmentSchema);