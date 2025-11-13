const OperatorLocation = require('../models/OperatorLocation');

// Get all operator locations
// Limited to 1000 results for performance
// Sort by most recent fechaActualizacion
exports.getOperatorLocations = async (req, res) => {
    try {
        const locations = await OperatorLocation.find().limit(1000).sort({ fechaActualizacion: -1 });
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

// Get locations by shift
exports.getLocationsByShift = async (req, res) => {
    try {
        const locations = await OperatorLocation.find({ idHorario: req.params.idHorario });
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create operator location
exports.createOperatorLocation = async (req, res) => {
    const location = new OperatorLocation({
      idHorario: req.body.idHorario,
      idOperador: req.body.idOperador,
      location: req.body.location,
      fechaActualizacion: req.body.fechaActualizacion,
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
            location.idHorario = req.body.idHorario || location.idHorario;
            location.idOperador = req.body.idOperador || location.idOperador;
            location.location = req.body.location || location.location;
            location.fechaActualizacion =
              req.body.fechaActualizacion || location.fechaActualizacion;

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


