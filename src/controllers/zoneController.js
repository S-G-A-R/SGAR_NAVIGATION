const Zone = require('../models/Zone');

// Get all zones
exports.getZones = async (req, res) => {
    try {
        const zones = await Zone.find().populate('idDistrito');
        res.json(zones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get zone by ID
exports.getZone = async (req, res) => {
    try {
        const zone = await Zone.findById(req.params.id).populate('idDistrito');
        if (zone) {
            res.json(zone);
        } else {
            res.status(404).json({ message: 'Zona no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get zones by district
exports.getZonesByDistrict = async (req, res) => {
    try {
        const zones = await Zone.find({ idDistrito: req.params.districtId });
        res.json(zones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create zone
exports.createZone = async (req, res) => {
    const zone = new Zone({
        nombre: req.body.nombre,
        idDistrito: req.body.idDistrito,
        idOrganizacion: req.body.idOrganizacion,
        descripcion: req.body.descripcion
    });

    try {
        const newZone = await zone.save();
        res.status(201).json(newZone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update zone
exports.updateZone = async (req, res) => {
    try {
        const zone = await Zone.findById(req.params.id);
        if (zone) {
            zone.nombre = req.body.nombre || zone.nombre;
            zone.idDistrito = req.body.idDistrito || zone.idDistrito;
            zone.idOrganizacion = req.body.idOrganizacion || zone.idOrganizacion;
            zone.descripcion = req.body.descripcion || zone.descripcion;
            
            const updatedZone = await zone.save();
            res.json(updatedZone);
        } else {
            res.status(404).json({ message: 'Zona no encontrada.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete zone
exports.deleteZone = async (req, res) => {
    try {
        const zone = await Zone.findById(req.params.id);
        if (zone) {
            await zone.remove();
            res.json({ message: 'Zona eliminada exitosamente.' });
        } else {
            res.status(404).json({ message: 'Zona no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};