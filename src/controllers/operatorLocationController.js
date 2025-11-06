const OperatorLocation = require('../models/OperatorLocation');

// Get all operator locations
exports.getOperatorLocations = async (req, res) => {
    try {
        const locations = await OperatorLocation.find();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get operator location by ID
exports.getOperatorLocation = async (req, res) => {
    try {
        const location = await OperatorLocation.findById(req.params.id);
        if (location) {
            res.json(location);
        } else {
            res.status(404).json({ message: 'Ubicación del operador no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get locations by operator
exports.getLocationsByOperator = async (req, res) => {
    try {
        const locations = await OperatorLocation.find({ idOperador: req.params.operatorId });
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get locations by citizen
exports.getLocationsByCitizen = async (req, res) => {
    try {
        const locations = await OperatorLocation.find({ idCiudadano: req.params.citizenId });
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create operator location
exports.createOperatorLocation = async (req, res) => {
    const location = new OperatorLocation({
        idCiudadano: req.body.idCiudadano,
        idOperador: req.body.idOperador,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        titulo: req.body.titulo,
        estado: req.body.estado
    });

    try {
        const newLocation = await location.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update operator location
exports.updateOperatorLocation = async (req, res) => {
    try {
        const location = await OperatorLocation.findById(req.params.id);
        if (location) {
            location.idCiudadano = req.body.idCiudadano || location.idCiudadano;
            location.idOperador = req.body.idOperador || location.idOperador;
            location.latitud = req.body.latitud || location.latitud;
            location.longitud = req.body.longitud || location.longitud;
            location.titulo = req.body.titulo || location.titulo;
            location.estado = req.body.estado || location.estado;

            const updatedLocation = await location.save();
            res.json(updatedLocation);
        } else {
            res
              .status(404)
              .json({ message: "Ubicación del operador no encontrada." });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete operator location
exports.deleteOperatorLocation = async (req, res) => {
    try {
        const location = await OperatorLocation.findById(req.params.id);
        if (location) {
            await location.remove();
            res.json({ message: "Ubicación del operador eliminada exitosamente." });
        } else {
            res
              .status(404)
              .json({ message: "Ubicación del operador no encontrada." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};