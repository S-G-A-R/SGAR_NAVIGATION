const LocationNotification = require('../models/LocationNotification');

// Get all location notifications
exports.getLocationNotifications = async (req, res) => {
    try {
        const notifications = await LocationNotification.find();
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get location notification by ID
exports.getLocationNotification = async (req, res) => {
    try {
        const notification = await LocationNotification.findById(req.params.id);
        if (notification) {
            res.json(notification);
        } else {
            res.status(404).json({ message: 'Notificación de localización no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get notifications by location
exports.getNotificationsByLocation = async (req, res) => {
    try {
        const notifications = await LocationNotification.find({ idUbicacion: req.params.locationId });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get notifications by citizen
exports.getNotificationsByCitizen = async (req, res) => {
    try {
        const notifications = await LocationNotification.find({ idCiudadano: req.params.citizenId });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create location notification
exports.createLocationNotification = async (req, res) => {
    const notification = new LocationNotification({
        idUbicacion: req.body.idUbicacion,
        idCiudadano: req.body.idCiudadano,
        distanciaMetros: req.body.distanciaMetros,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        fechaActualizacion: req.body.fechaActualizacion || new Date()
    });

    try {
        const newNotification = await notification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update location notification
exports.updateLocationNotification = async (req, res) => {
    try {
        const notification = await LocationNotification.findById(req.params.id);
        if (notification) {
            notification.idUbicacion = req.body.idUbicacion || notification.idUbicacion;
            notification.idCiudadano = req.body.idCiudadano || notification.idCiudadano;
            notification.distanciaMetros = req.body.distanciaMetros || notification.distanciaMetros;
            notification.latitud = req.body.latitud || notification.latitud;
            notification.longitud = req.body.longitud || notification.longitud;
            notification.fechaActualizacion = req.body.fechaActualizacion || new Date();

            const updatedNotification = await notification.save();
            res.json(updatedNotification);
        } else {
            res
              .status(404)
              .json({ message: "Notificación de localización no encontrada." });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete location notification
exports.deleteLocationNotification = async (req, res) => {
    try {
        const notification = await LocationNotification.findById(req.params.id);
        if (notification) {
            await notification.remove();
            res.json({ message: "Notificación de localización eliminada exitosamente." });
        } else {
            res
              .status(404)
              .json({ message: "Notificación de localización no encontrada." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};