const express = require('express');
const router = express.Router();
const locationNotificationController = require('../controllers/locationNotificationController');

// Get all location notifications
router.get('/', locationNotificationController.getLocationNotifications);

// Get notifications by location
router.get('/location/:locationId', locationNotificationController.getNotificationsByLocation);

// Get notifications by citizen
router.get('/citizen/:citizenId', locationNotificationController.getNotificationsByCitizen);

// Get specific location notification
router.get('/:id', locationNotificationController.getLocationNotification);

// Create location notification
router.post('/', locationNotificationController.createLocationNotification);

// Update location notification
router.put('/:id', locationNotificationController.updateLocationNotification);

// Delete location notification
router.delete('/:id', locationNotificationController.deleteLocationNotification);

module.exports = router;