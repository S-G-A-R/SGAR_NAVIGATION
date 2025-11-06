const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districtController');

// Get all districts
router.get('/', districtController.getDistricts);

// Get districts by municipality
router.get('/municipality/:municipalityId', districtController.getDistrictsByMunicipality);

// Get specific district
router.get('/:id', districtController.getDistrict);

// Create district
router.post('/', districtController.createDistrict);

// Update district
router.put('/:id', districtController.updateDistrict);

// Delete district
router.delete('/:id', districtController.deleteDistrict);

module.exports = router;