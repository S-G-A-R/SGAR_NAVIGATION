const Municipality = require('../models/Municipality');

// Get all municipalities
exports.getMunicipalities = async (req, res) => {
    try {
        const municipalities = await Municipality.find().populate('idDepartamento');
        res.json(municipalities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get municipality by ID
exports.getMunicipality = async (req, res) => {
    try {
        const municipality = await Municipality.findById(req.params.id).populate('idDepartamento');
        if (municipality) {
            res.json(municipality);
        } else {
            res.status(404).json({ message: 'Municipio no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get municipalities by department
exports.getMunicipalitiesByDepartment = async (req, res) => {
    try {
        const municipalities = await Municipality.find({ idDepartamento: req.params.departmentId });
        res.json(municipalities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create municipality
exports.createMunicipality = async (req, res) => {
    const municipality = new Municipality({
        nombre: req.body.nombre,
        idDepartamento: req.body.idDepartamento
    });

    try {
        const newMunicipality = await municipality.save();
        res.status(201).json(newMunicipality);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update municipality
exports.updateMunicipality = async (req, res) => {
    try {
        const municipality = await Municipality.findById(req.params.id);
        if (municipality) {
            municipality.nombre = req.body.nombre || municipality.nombre;
            municipality.idDepartamento = req.body.idDepartamento || municipality.idDepartamento;
            const updatedMunicipality = await municipality.save();
            res.json(updatedMunicipality);
        } else {
            res.status(404).json({ message: 'Munici´pio no encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete municipality
exports.deleteMunicipality = async (req, res) => {
    try {
        const municipality = await Municipality.findById(req.params.id);
        if (municipality) {
            await municipality.remove();
            res.json({ message: 'Municipio eliminado exitosamente.' });
        } else {
            res.status(404).json({ message: 'Municipio no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};