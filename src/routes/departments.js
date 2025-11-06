const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Get all departments
router.get('/', departmentController.getDepartments);

// Get specific department
router.get('/:id', departmentController.getDepartment);

// Create department
router.post('/', departmentController.createDepartment);

// Update department
router.put('/:id', departmentController.updateDepartment);

// Delete department
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;