const CollectionCenter = require('../models/CollectionCenter');

// Get all collection centers
exports.getCollectionCenters = async (req, res) => {
    try {
        const centers = await CollectionCenter.find();
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get collection center by ID
exports.getCollectionCenter = async (req, res) => {
    try {
        const center = await CollectionCenter.findById(req.params.id);
        if (center) {
            res.json(center);
        } else {
            res.status(404).json({ message: 'Centro de acopio no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get centers by manager
exports.getCentersByManager = async (req, res) => {
    try {
        const centers = await CollectionCenter.find({ idGestor: req.params.managerId });
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create collection center
exports.createCollectionCenter = async (req, res) => {
    const center = new CollectionCenter({
        idGestor: req.body.idGestor,
        nombre: req.body.nombre
    });

    try {
        const newCenter = await center.save();
        res.status(201).json(newCenter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update collection center
exports.updateCollectionCenter = async (req, res) => {
    try {
        const center = await CollectionCenter.findById(req.params.id);
        if (center) {
            center.idGestor = req.body.idGestor || center.idGestor;
            center.nombre = req.body.nombre || center.nombre;

            const updatedCenter = await center.save();
            res.json(updatedCenter);
        } else {
            res.status(404).json({ message: 'Centro de acopio no encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete collection center
exports.deleteCollectionCenter = async (req, res) => {
    try {
        const center = await CollectionCenter.findById(req.params.id);
        if (center) {
            await center.remove();
            res.json({ message: 'Centro de acopio eliminado exitosamente.' });
        } else {
            res.status(404).json({ message: 'Centor de acopio no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};