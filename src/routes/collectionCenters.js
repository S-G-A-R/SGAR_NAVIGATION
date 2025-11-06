const express = require('express');
const router = express.Router();
const collectionCenterController = require('../controllers/collectionCenterController');

// Get all collection centers
router.get('/', collectionCenterController.getCollectionCenters);

// Get centers by manager
router.get('/manager/:managerId', collectionCenterController.getCentersByManager);

// Get specific collection center
router.get('/:id', collectionCenterController.getCollectionCenter);

// Create collection center
router.post('/', collectionCenterController.createCollectionCenter);

// Update collection center
router.put('/:id', collectionCenterController.updateCollectionCenter);

// Delete collection center
router.delete('/:id', collectionCenterController.deleteCollectionCenter);

module.exports = router;