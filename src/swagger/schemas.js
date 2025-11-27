const schemas = {
    Department: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID del departamento'
            },
            nombre: {
                type: 'string',
                description: 'Nombre del departamento',
                example: 'San Salvador'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['nombre']
    },

    Municipality: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID del municipio'
            },
            nombre: {
                type: 'string',
                description: 'Nombre del municipio',
                example: 'San Salvador'
            },
            idDepartamento: {
                type: 'string',
                description: 'ID del departamento (referencia)',
                example: '507f1f77bcf86cd799439011'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['nombre', 'idDepartamento']
    },

    District: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID del distrito'
            },
            nombre: {
                type: 'string',
                description: 'Nombre del distrito',
                example: 'Distrito Centro'
            },
            idMunicipio: {
                type: 'string',
                description: 'ID del municipio (referencia)',
                example: '507f1f77bcf86cd799439011'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['nombre', 'idMunicipio']
    },

    Zone: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID de la zona'
            },
            nombre: {
                type: 'string',
                description: 'Nombre de la zona',
                example: 'Zona Norte'
            },
            idDistrito: {
                type: 'string',
                description: 'ID del distrito (referencia)',
                example: '507f1f77bcf86cd799439011'
            },
            idOrganizacion: {
                type: 'integer',
                description: 'ID de la organización',
                example: 1
            },
            descripcion: {
                type: 'string',
                description: 'Descripción de la zona',
                example: 'Zona geográfica norte'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['nombre', 'idDistrito', 'idOrganizacion']
    },

    OperatorLocation: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID de la ubicación del operador'
            },
            idCiudadano: {
                type: 'integer',
                description: 'ID del ciudadano',
                example: 123
            },
            idOperador: {
                type: 'integer',
                description: 'ID del operador',
                example: 456
            },
            latitud: {
                type: 'number',
                format: 'double',
                description: 'Latitud de la ubicación',
                example: 13.6929
            },
            longitud: {
                type: 'number',
                format: 'double',
                description: 'Longitud de la ubicación',
                example: -89.2182
            },
            titulo: {
                type: 'string',
                description: 'Título de la ubicación',
                example: 'Centro de recolección'
            },
            estado: {
                type: 'integer',
                description: 'Estado de la ubicación (1=activo, 0=inactivo)',
                example: 1
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['idCiudadano', 'idOperador', 'latitud', 'longitud', 'titulo', 'estado']
    },

    LocationNotification: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID de la notificación'
            },
            idUbicacion: {
                type: 'integer',
                description: 'ID de la ubicación',
                example: 1
            },
            idCiudadano: {
                type: 'integer',
                description: 'ID del ciudadano',
                example: 123
            },
            distanciaMetros: {
                type: 'number',
                format: 'double',
                description: 'Distancia en metros',
                example: 500.5
            },
            latitud: {
                type: 'number',
                format: 'double',
                description: 'Latitud de la ubicación',
                example: 13.6929
            },
            longitud: {
                type: 'number',
                format: 'double',
                description: 'Longitud de la ubicación',
                example: -89.2182
            },
            fechaActualizacion: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización',
                example: '2025-11-26T10:30:00Z'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['idUbicacion', 'idCiudadano', 'distanciaMetros', 'latitud', 'longitud']
    },

    CollectionLocation: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID de la ubicación de acopio'
            },
            idObjectId: {
                type: 'integer',
                description: 'ID del objeto',
                example: 1
            },
            latitud: {
                type: 'number',
                format: 'double',
                description: 'Latitud de la ubicación',
                example: 13.6929
            },
            longitud: {
                type: 'number',
                format: 'double',
                description: 'Longitud de la ubicación',
                example: -89.2182
            },
            descripcion: {
                type: 'string',
                description: 'Descripción de la ubicación',
                example: 'Centro de acopio principal'
            },
            horaApertura: {
                type: 'string',
                description: 'Hora de apertura (HH:mm)',
                example: '08:00'
            },
            horaCierre: {
                type: 'string',
                description: 'Hora de cierre (HH:mm)',
                example: '17:00'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['idObjectId', 'latitud', 'longitud', 'horaApertura', 'horaCierre']
    },

    CollectionCenter: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID del centro de acopio'
            },
            idGestor: {
                type: 'integer',
                description: 'ID del gestor',
                example: 789
            },
            nombre: {
                type: 'string',
                description: 'Nombre del centro de acopio',
                example: 'Centro de Acopio San Salvador'
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de creación'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                description: 'Fecha de actualización'
            }
        },
        required: ['idGestor', 'nombre']
    },

    Error: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Mensaje de error'
            }
        }
    }
};

module.exports = schemas;