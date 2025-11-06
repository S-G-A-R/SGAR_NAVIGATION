const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController');

// Get all zones
router.get('/', zoneController.getZones);

// Get zones by district
router.get('/district/:districtId', zoneController.getZonesByDistrict);

// Get specific zone
router.get('/:id', zoneController.getZone);

// Create zone
router.post('/', zoneController.createZone);

// Update zone
router.put('/:id', zoneController.updateZone);

// Delete zone
router.delete('/:id', zoneController.deleteZone);

module.exports = router;