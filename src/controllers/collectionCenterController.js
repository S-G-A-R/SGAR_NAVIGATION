const CollectionCenter = require('../models/CollectionCenter');

// Get all collection centers
exports.getCollectionCenters = async (req, res) => {
    try {
        const centers = await CollectionCenter.find();
        res.json(centers);
        //#swagger.responses[200] = { description: "Lista de centros de acopio obtenida exitosamente." }
        return res.status(200).send(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
        //#swagger.responses[500] = { description: "Error al obtener la lista de centros de acopio." }
        return res.status(500).send(false);
    }
};

// Get collection center by ID
exports.getCollectionCenter = async (req, res) => {
    try {
        const center = await CollectionCenter.findById(req.params.id);
        if (center) {
            //#swagger.responses[200] = { description: "Centro de acopio obtenido exitosamente." }
            res.json(center);
            return res.status(200).send(center);
        } else {
            //#swagger.responses[404] = { description: "Centro de acopio no encontrado." }
            res.status(404).json({ message: 'Centro de acopio no encontrado.' });
            return res.status(404).send(false);
        }
    } catch (error) {
            //#swagger.responses[500] = { description: "Error al obtener el centro de acopio." }
        res.status(500).json({ message: error.message });
        return res.status(500).send(false);
    }
};

// Get centers by manager
exports.getCentersByManager = async (req, res) => {
    try {

        const centers = await CollectionCenter.find({
          idOrganizacion: req.params.idOrganizacion,
        });
        // #swagger.responses[200] = { description: "Centros de acopio obtenidos exitosamente para la organización especificada." }
        res.json(centers);
        return res.status(200).send(centers);
    } catch (error) {
      // #swagger.responses[500] = { description: "Error al obtener los centros de acopio para la organización especificada." }
      res.status(500).json({ message: error.message });
      return res.status(500).send(false);
    }
};

// Create collection center
exports.createCollectionCenter = async (req, res) => {
    const center = new CollectionCenter({
        idOrganizacion: req.body.idOrganizacion,
        nombre: req.body.nombre
    });

    try {
        const newCenter = await center.save();
        // #swagger.responses[201] = { description: "Centro de acopio creado exitosamente." }
        res.status(201).json(newCenter);
        return res.status(201).send(newCenter);
    } catch (error) {
        // #swagger.responses[400] = { description: "Error al crear el centro de acopio." }
        res.status(400).json({ message: error.message });
        return res.status(400).send(false);
    }
};

// Update collection center
exports.updateCollectionCenter = async (req, res) => {
    try {
        const center = await CollectionCenter.findById(req.params.id);
        if (center) {
            center.idGestor = req.body.idGestor || center.idGestor;
            center.nombre = req.body.nombre || center.nombre;

            const updatedCenter = await center.save();
            // #swagger.responses[200] = { description: "Centro de acopio actualizado exitosamente." }
            res.json(updatedCenter);
            return res.status(200).send(updatedCenter);
        } else {
            // #swagger.responses[404] = { description: "Centro de acopio no encontrado." }
            res.status(404).json({ message: 'Centro de acopio no encontrado.' });
            return res.status(404).send(false);
        }
    } catch (error) {
        // #swagger.responses[400] = { description: "Error al actualizar el centro de acopio." }
        res.status(400).json({ message: error.message });
        return res.status(400).send(false);
    }
};

// Delete collection center
exports.deleteCollectionCenter = async (req, res) => {
    try {
        const center = await CollectionCenter.findById(req.params.id);
        if (center) {
            await center.remove();
            // #swagger.responses[200] = { description: "Centro de acopio eliminado exitosamente." }
            res.json({ message: 'Centro de acopio eliminado exitosamente.' });

        } else {
            // #swagger.responses[404] = { description: "Centro de acopio no encontrado." }
            res.status(404).json({ message: 'Centor de acopio no encontrado.' });

        }
    } catch (error) {
        // #swagger.responses[500] = { description: "Error al eliminar el centro de acopio." }
        res.status(500).json({ message: error.message });
    }
};