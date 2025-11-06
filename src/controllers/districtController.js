const District = require('../models/District');

// Get all districts
exports.getDistricts = async (req, res) => {
    try {
        const districts = await District.find().populate('idMunicipio');
        res.json(districts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get district by ID
exports.getDistrict = async (req, res) => {
    try {
        const district = await District.findById(req.params.id).populate('idMunicipio');
        if (district) {
            res.json(district);
        } else {
            res.status(404).json({ message: 'Distrito no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get districts by municipality
exports.getDistrictsByMunicipality = async (req, res) => {
    try {
        const districts = await District.find({ idMunicipio: req.params.municipalityId });
        res.json(districts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create district
exports.createDistrict = async (req, res) => {
    const district = new District({
        nombre: req.body.nombre,
        idMunicipio: req.body.idMunicipio
    });

    try {
        const newDistrict = await district.save();
        res.status(201).json(newDistrict);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update district
exports.updateDistrict = async (req, res) => {
    try {
        const district = await District.findById(req.params.id);
        if (district) {
            district.nombre = req.body.nombre || district.nombre;
            district.idMunicipio = req.body.idMunicipio || district.idMunicipio;
            const updatedDistrict = await district.save();
            res.json(updatedDistrict);
        } else {
            res.status(404).json({ message: 'Distrito no encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete district
exports.deleteDistrict = async (req, res) => {
    try {
        const district = await District.findById(req.params.id);
        if (district) {
            await district.remove();
            res.json({ message: 'Distrito eliminado exitosamente.' });
        } else {
            res.status(404).json({ message: 'Distrito no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};