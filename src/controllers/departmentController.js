const Department = require('../models/Department');

// Get all departments
exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get department by ID
exports.getDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department) {
            res.json(department);
        } else {
            res.status(404).json({ message: 'Departamento no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create department
exports.createDepartment = async (req, res) => {
    const department = new Department({
        nombre: req.body.nombre
    });

    try {
        const newDepartment = await department.save();
        res.status(201).json(newDepartment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update department
exports.updateDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department) {
            department.nombre = req.body.nombre || department.nombre;
            const updatedDepartment = await department.save();
            res.json(updatedDepartment);
        } else {
            res.status(404).json({ message: 'Departamento no encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete department
exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department) {
            await department.remove();
            res.json({ message: 'Departamento eliminado exitosamente.' });
        } else {
            res.status(404).json({ message: 'Departamento no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};