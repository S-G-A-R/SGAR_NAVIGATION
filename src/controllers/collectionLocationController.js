const CollectionLocation = require('../models/CollectionLocation');

// Get all collection locations
exports.getCollectionLocations = async (req, res) => {
    try {
        const locations = await CollectionLocation.find();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all collection locations
exports.findCenterById = async (req, res) => {
    try {
        const locations = await CollectionLocation.find({ idCenter: req.params.idCenter });
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find nearby collection locations
exports.findNearbyLocations = async (req, res) => {
    const { lon, lat, radius} = req.body;

    try{
        const locations = await CollectionLocation.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lon, lat]
                    },
                    $maxDistance: radius
                }
            }
        }).limit(100);
        res.json(locations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get collection location by ID
exports.getCollectionLocation = async (req, res) => {
    try {
        const location = await CollectionLocation.findById(req.params.id);
        if (location) {
            res.json(location);
        } else {
            res.status(404).json({ message: 'Ubicación de acopio no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create collection location
exports.createCollectionLocation = async (req, res) => {
    const location = new CollectionLocation({
      idCenter: req.body.idCenter,
      location: req.body.location,
      descripcion: req.body.descripcion,
      horaApertura: req.body.horaApertura,
      horaCierre: req.body.horaCierre,
    });

    try {
        const newLocation = await location.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update collection location
exports.updateCollectionLocation = async (req, res) => {
    try {
        const location = await CollectionLocation.findById(req.params.id);
        if (location) {
            location.idCenter = req.body.idCenter || location.idCenter;
            location.location = req.body.location || location.location;
            location.descripcion = req.body.descripcion || location.descripcion;
            location.horaApertura = req.body.horaApertura || location.horaApertura;
            location.horaCierre = req.body.horaCierre || location.horaCierre;

            const updatedLocation = await location.save();
            res.json(updatedLocation);
        } else {
            res.status(404).json({ message: 'Ubicación de acopio no encontrada.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete collection location
exports.deleteCollectionLocation = async (req, res) => {
    try {
        const location = await CollectionLocation.findById(req.params.id);
        if (location) {
            await location.remove();
            res.json({ message: 'Ubicación de acopio eliminada exitosamente.' });
        } else {
            res.status(404).json({ message: "Ubicación de acopio no encontrada." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};