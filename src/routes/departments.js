const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Get all departments
/**
 * #swagger.get
 * #swagger.summary = 'Get all departments'
 * #swagger.description = 'Retrieve a list of all departments'
 * #swagger.tags = ['Departments']
 * #swagger.responses[200] = { description: 'Successfully retrieved departments', schema: { type: 'array', items: { $ref: '#/definitions/Department' } } }
 * #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/definitions/Error' } }
 */
router.get('/', departmentController.getDepartments);

// Get specific department
/**
 * #swagger.get
 * #swagger.summary = 'Get a department by ID'
 * #swagger.description = 'Retrieve a specific department by its ID'
 * #swagger.tags = ['Departments']
 * #swagger.parameters['id'] = { in: 'path', description: 'Department ID', required: true, type: 'string' }
 * #swagger.responses[200] = { description: 'Department found', schema: { $ref: '#/definitions/Department' } }
 * #swagger.responses[404] = { description: 'Department not found', schema: { $ref: '#/definitions/Error' } }
 * #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/definitions/Error' } }
 */
router.get('/:id', departmentController.getDepartment);

// Create department
/**
 * #swagger.post
 * #swagger.summary = 'Create a new department'
 * #swagger.description = 'Create a new department'
 * #swagger.tags = ['Departments']
 * #swagger.parameters['body'] = { in: 'body', description: 'Department data', required: true, schema: { $ref: '#/definitions/Department' } }
 * #swagger.responses[201] = { description: 'Department created successfully', schema: { $ref: '#/definitions/Department' } }
 * #swagger.responses[400] = { description: 'Bad request', schema: { $ref: '#/definitions/Error' } }
 */
router.post('/', departmentController.createDepartment);

// Update department
/**
 * #swagger.put
 * #swagger.summary = 'Update a department'
 * #swagger.description = 'Update an existing department'
 * #swagger.tags = ['Departments']
 * #swagger.parameters['id'] = { in: 'path', description: 'Department ID', required: true, type: 'string' }
 * #swagger.parameters['body'] = { in: 'body', description: 'Department data to update', required: true, schema: { $ref: '#/definitions/Department' } }
 * #swagger.responses[200] = { description: 'Department updated successfully', schema: { $ref: '#/definitions/Department' } }
 * #swagger.responses[404] = { description: 'Department not found', schema: { $ref: '#/definitions/Error' } }
 * #swagger.responses[400] = { description: 'Bad request', schema: { $ref: '#/definitions/Error' } }
 */
router.put('/:id', departmentController.updateDepartment);

// Delete department
/**
 * #swagger.delete
 * #swagger.summary = 'Delete a department'
 * #swagger.description = 'Delete an existing department'
 * #swagger.tags = ['Departments']
 * #swagger.parameters['id'] = { in: 'path', description: 'Department ID', required: true, type: 'string' }
 * #swagger.responses[200] = { description: 'Department deleted successfully', schema: { type: 'object', properties: { message: { type: 'string' } } } }
 * #swagger.responses[404] = { description: 'Department not found', schema: { $ref: '#/definitions/Error' } }
 * #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/definitions/Error' } }
 */
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;