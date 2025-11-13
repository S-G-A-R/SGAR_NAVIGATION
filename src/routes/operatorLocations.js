const express = require('express');
const router = express.Router();
const operatorLocationController = require('../controllers/operatorLocationController');

// Get all operator locations
router.get('/', operatorLocationController.getOperatorLocations);

// Get locations by operator
router.get('/operator/:operatorId', operatorLocationController.getLocationsByShift);

// Get locations by shift
router.get('/shift/:shiftId', operatorLocationController.getLocationsByShift);

// Get specific operator location
router.get('/:id', operatorLocationController.getOperatorLocation);

// Create operator location
router.post('/', operatorLocationController.createOperatorLocation);

// Update operator location
router.put('/:id', operatorLocationController.updateOperatorLocation);

// Delete operator location
router.delete('/:id', operatorLocationController.deleteOperatorLocation);

module.exports = router;