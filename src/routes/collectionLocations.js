const express = require('express');
const router = express.Router();
const collectionLocationController = require('../controllers/collectionLocationController');

// Get all collection locations
router.get('/', collectionLocationController.getCollectionLocations);

// Get specific collection location
router.get('/:id', collectionLocationController.getCollectionLocation);

// Create collection location
router.post('/', collectionLocationController.createCollectionLocation);

// Update collection location
router.put('/:id', collectionLocationController.updateCollectionLocation);

// Delete collection location
router.delete('/:id', collectionLocationController.deleteCollectionLocation);

module.exports = router;