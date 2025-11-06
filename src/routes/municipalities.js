const express = require('express');
const router = express.Router();
const municipalityController = require('../controllers/municipalityController');

// Get all municipalities
router.get('/', municipalityController.getMunicipalities);

// Get municipalities by department
router.get('/department/:departmentId', municipalityController.getMunicipalitiesByDepartment);

// Get specific municipality
router.get('/:id', municipalityController.getMunicipality);

// Create municipality
router.post('/', municipalityController.createMunicipality);

// Update municipality
router.put('/:id', municipalityController.updateMunicipality);

// Delete municipality
router.delete('/:id', municipalityController.deleteMunicipality);

module.exports = router;