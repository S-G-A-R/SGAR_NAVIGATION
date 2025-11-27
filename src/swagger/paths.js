const schemas = require('./schemas');

module.exports = {
    paths: {
        // ==================== DEPARTMENTS ====================
        '/departments': {
            get: {
                tags: ['Departments'],
                summary: 'Obtiene todos los departamentos',
                description: 'Obtiene una lista de todos los departamentos disponibles',
                responses: {
                    200: {
                        description: 'Departamentos obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/Department' }
                        }
                    },
                    500: {
                        description: 'Internal server error',
                        schema: { $ref: '#/definitions/Error' }
                    }
                }
            },
            post: {
                tags: ['Departments'],
                summary: 'Crear un nuevo departamento',
                description: 'Crear un nuevo departamento con el nombre proporcionado',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    description: 'Objeto de departamento',
                    required: true,
                    schema: { $ref: '#/definitions/Department' }
                }],
                responses: {
                    201: {
                        description: 'Departamento creado exitosamente',
                        schema: { $ref: '#/definitions/Department' }
                    },
                    400: {
                        description: 'Bad request',
                        schema: { $ref: '#/definitions/Error' }
                    }
                }
            }
        },
        '/departments/{id}': {
            get: {
                tags: ['Departments'],
                summary: 'Obtiene un departamento por ID',
                description: 'Obtiene un departamento específico por su ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    description: 'ID del departamento',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Departamento encontrado',
                        schema: { $ref: '#/definitions/Department' }
                    },
                    404: {
                        description: 'No se encontró el departamento',
                        schema: { $ref: '#/definitions/Error' }
                    }
                }
            },
            put: {
                tags: ['Departments'],
                summary: 'Actualiza un departamento',
                description: 'Actualiza un departamento existente',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        description: 'Id del departamento',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Información del departamento a actualizar',
                        required: true,
                        schema: { $ref: '#/definitions/Department' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Departamento actualizado exitosamente',
                        schema: { $ref: '#/definitions/Department' }
                    },
                    404: {
                        description: 'No se encontró el departamento',
                        schema: { $ref: '#/definitions/Error' }
                    }
                }
            },
            delete: {
                tags: ['Departments'],
                summary: 'Elimina un departamento',
                description: 'Elimina un departamento existente por su ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    description: 'ID del departamento',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Departamento eliminado exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    },
                    404: {
                        description: 'No se encontró el departamento',
                        schema: { $ref: '#/definitions/Error' }
                    }
                }
            }
        },
        
        // ==================== MUNICIPALITIES ====================
        '/municipalities': {
            get: {
                tags: ['Municipalities'],
                summary: 'Obtiene todos los municipios',
                description: 'Obtiene una lista de todos los municipios disponibles',
                responses: {
                    200: {
                        description: 'Municipios obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/Municipality' }
                        }
                    }
                }
            },
            post: {
                tags: ['Municipalities'],
                summary: 'Crear un nuevo municipio',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/Municipality' }
                }],
                responses: {
                    201: {
                        description: 'Municipio creado exitosamente',
                        schema: { $ref: '#/definitions/Municipality' }
                    }
                }
            }
        },
        '/municipalities/{id}': {
            get: {
                tags: ['Municipalities'],
                summary: 'Obtiene un municipio por ID',
                description: 'Obtiene un municipio específico por su ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Municipio encontrado',
                        schema: { $ref: '#/definitions/Municipality' }
                    },
                    404: {
                        description: 'No se encontró el municipio',
                        schema: { $ref: '#/definitions/Error' }
                    }
                }
            },
            put: {
                tags: ['Municipalities'],
                summary: 'Actualiza un municipio',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/Municipality' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Municipio actualizado exitosamente',
                        schema: { $ref: '#/definitions/Municipality' }
                    }
                }
            },
            delete: {
                tags: ['Municipalities'],
                summary: 'Elimina un municipio',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Municipio eliminado exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },
        '/municipalities/department/{departmentId}': {
            get: {
                tags: ['Municipalities'],
                summary: 'Obtiene municipios por departamento',
                parameters: [{
                    in: 'path',
                    name: 'departmentId',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Municipios obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/Municipality' }
                        }
                    }
                }
            }
        },

        // ==================== DISTRICTS ====================
        '/districts': {
            get: {
                tags: ['Districts'],
                summary: 'Obtiene todos los distritos',
                responses: {
                    200: {
                        description: 'Distritos obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/District' }
                        }
                    }
                }
            },
            post: {
                tags: ['Districts'],
                summary: 'Crear un nuevo distrito',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/District' }
                }],
                responses: {
                    201: {
                        description: 'Distrito creado exitosamente',
                        schema: { $ref: '#/definitions/District' }
                    }
                }
            }
        },
        '/districts/{id}': {
            get: {
                tags: ['Districts'],
                summary: 'Obtiene un distrito por ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Distrito encontrado',
                        schema: { $ref: '#/definitions/District' }
                    }
                }
            },
            put: {
                tags: ['Districts'],
                summary: 'Actualiza un distrito',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/District' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Distrito actualizado exitosamente',
                        schema: { $ref: '#/definitions/District' }
                    }
                }
            },
            delete: {
                tags: ['Districts'],
                summary: 'Elimina un distrito',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Distrito eliminado exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },
        '/districts/municipality/{municipalityId}': {
            get: {
                tags: ['Districts'],
                summary: 'Obtiene distritos por municipio',
                parameters: [{
                    in: 'path',
                    name: 'municipalityId',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Distritos obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/District' }
                        }
                    }
                }
            }
        },

        // ==================== ZONES ====================
        '/zones': {
            get: {
                tags: ['Zones'],
                summary: 'Obtiene todas las zonas',
                responses: {
                    200: {
                        description: 'Zonas obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/Zone' }
                        }
                    }
                }
            },
            post: {
                tags: ['Zones'],
                summary: 'Crear una nueva zona',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/Zone' }
                }],
                responses: {
                    201: {
                        description: 'Zona creada exitosamente',
                        schema: { $ref: '#/definitions/Zone' }
                    }
                }
            }
        },
        '/zones/{id}': {
            get: {
                tags: ['Zones'],
                summary: 'Obtiene una zona por ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Zona encontrada',
                        schema: { $ref: '#/definitions/Zone' }
                    }
                }
            },
            put: {
                tags: ['Zones'],
                summary: 'Actualiza una zona',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/Zone' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Zona actualizada exitosamente',
                        schema: { $ref: '#/definitions/Zone' }
                    }
                }
            },
            delete: {
                tags: ['Zones'],
                summary: 'Elimina una zona',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Zona eliminada exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },
        '/zones/district/{districtId}': {
            get: {
                tags: ['Zones'],
                summary: 'Obtiene zonas por distrito',
                parameters: [{
                    in: 'path',
                    name: 'districtId',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Zonas obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/Zone' }
                        }
                    }
                }
            }
        },

        // ==================== OPERATOR LOCATIONS ====================
        'operator-locations': {
            get: {
                tags: ['Operator Locations'],
                summary: 'Obtiene todas las ubicaciones de operadores',
                responses: {
                    200: {
                        description: 'Ubicaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/OperatorLocation' }
                        }
                    }
                }
            },
            post: {
                tags: ['Operator Locations'],
                summary: 'Crear una nueva ubicación de operador',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/OperatorLocation' }
                }],
                responses: {
                    201: {
                        description: 'Ubicación de operador creada exitosamente',
                        schema: { $ref: '#/definitions/OperatorLocation' }
                    }
                }
            }
        },
        '/operator-locations/{id}': {
            get: {
                tags: ['Operator Locations'],
                summary: 'Obtiene una ubicación de operador por ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Ubicación encontrada',
                        schema: { $ref: '#/definitions/OperatorLocation' }
                    }
                }
            },
            put: {
                tags: ['Operator Locations'],
                summary: 'Actualiza una ubicación de operador',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/OperatorLocation' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Ubicación actualizada exitosamente',
                        schema: { $ref: '#/definitions/OperatorLocation' }
                    }
                }
            },
            delete: {
                tags: ['Operator Locations'],
                summary: 'Elimina una ubicación de operador',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Ubicación eliminada exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },
        '/operator-locations/operator/{operatorId}': {
            get: {
                tags: ['Operator Locations'],
                summary: 'Obtiene ubicaciones por operador',
                parameters: [{
                    in: 'path',
                    name: 'operatorId',
                    required: true,
                    type: 'integer'
                }],
                responses: {
                    200: {
                        description: 'Ubicaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/OperatorLocation' }
                        }
                    }
                }
            }
        },
        '/operator-locations/citizen/{citizenId}': {
            get: {
                tags: ['Operator Locations'],
                summary: 'Obtiene ubicaciones por ciudadano',
                parameters: [{
                    in: 'path',
                    name: 'citizenId',
                    required: true,
                    type: 'integer'
                }],
                responses: {
                    200: {
                        description: 'Ubicaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/OperatorLocation' }
                        }
                    }
                }
            }
        },

        // ==================== LOCATION NOTIFICATIONS ====================
        '/location-notifications': {
            get: {
                tags: ['Location Notifications'],
                summary: 'Obtiene todas las notificaciones de localización',
                responses: {
                    200: {
                        description: 'Notificaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/LocationNotification' }
                        }
                    }
                }
            },
            post: {
                tags: ['Location Notifications'],
                summary: 'Crear una nueva notificación de localización',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/LocationNotification' }
                }],
                responses: {
                    201: {
                        description: 'Notificación de localización creada exitosamente',
                        schema: { $ref: '#/definitions/LocationNotification' }
                    }
                }
            }
        },
        '/location-notifications/{id}': {
            get: {
                tags: ['Location Notifications'],
                summary: 'Obtiene una notificación por ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Notificación encontrada',
                        schema: { $ref: '#/definitions/LocationNotification' }
                    }
                }
            },
            put: {
                tags: ['Location Notifications'],
                summary: 'Actualiza una notificación',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/LocationNotification' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Notificación actualizada exitosamente',
                        schema: { $ref: '#/definitions/LocationNotification' }
                    }
                }
            },
            delete: {
                tags: ['Location Notifications'],
                summary: 'Elimina una notificación',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Notificación eliminada exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },
        '/location-notifications/location/{locationId}': {
            get: {
                tags: ['Location Notifications'],
                summary: 'Obtiene notificaciones por ubicación',
                parameters: [{
                    in: 'path',
                    name: 'locationId',
                    required: true,
                    type: 'integer'
                }],
                responses: {
                    200: {
                        description: 'Notificaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/LocationNotification' }
                        }
                    }
                }
            }
        },
        '/location-notifications/citizen/{citizenId}': {
            get: {
                tags: ['Location Notifications'],
                summary: 'Obtiene notificaciones por ciudadano',
                parameters: [{
                    in: 'path',
                    name: 'citizenId',
                    required: true,
                    type: 'integer'
                }],
                responses: {
                    200: {
                        description: 'Notificaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/LocationNotification' }
                        }
                    }
                }
            }
        },

        // ==================== COLLECTION LOCATIONS ====================
        '/collection-locations': {
            get: {
                tags: ['Collection Locations'],
                summary: 'Obtiene todas las ubicaciones de recolección',
                responses: {
                    200: {
                        description: 'Ubicaciones obtenidas exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/CollectionLocation' }
                        }
                    }
                }
            },
            post: {
                tags: ['Collection Locations'],
                summary: 'Crear una nueva ubicación de recolección',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/CollectionLocation' }
                }],
                responses: {
                    201: {
                        description: 'Ubicación de recolección creada exitosamente',
                        schema: { $ref: '#/definitions/CollectionLocation' }
                    }
                }
            }
        },
        '/collection-locations/{id}': {
            get: {
                tags: ['Collection Locations'],
                summary: 'Obtiene una ubicación de recolección por ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Ubicación encontrada',
                        schema: { $ref: '#/definitions/CollectionLocation' }
                    }
                }
            },
            put: {
                tags: ['Collection Locations'],
                summary: 'Actualiza una ubicación de recolección',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/CollectionLocation' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Ubicación actualizada exitosamente',
                        schema: { $ref: '#/definitions/CollectionLocation' }
                    }
                }
            },
            delete: {
                tags: ['Collection Locations'],
                summary: 'Elimina una ubicación de recolección',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Ubicación eliminada exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },

        // ==================== COLLECTION CENTERS ====================
        '/collection-centers': {
            get: {
                tags: ['Collection Centers'],
                summary: 'Obtiene todos los centros de acopio',
                responses: {
                    200: {
                        description: 'Centros de acopio obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/CollectionCenter' }
                        }
                    }
                }
            },
            post: {
                tags: ['Collection Centers'],
                summary: 'Crear un nuevo centro de acopio',
                parameters: [{
                    in: 'body',
                    name: 'body',
                    required: true,
                    schema: { $ref: '#/definitions/CollectionCenter' }
                }],
                responses: {
                    201: {
                        description: 'Centro de acopio creado exitosamente',
                        schema: { $ref: '#/definitions/CollectionCenter' }
                    }
                }
            }
        },
        '/collection-centers/{id}': {
            get: {
                tags: ['Collection Centers'],
                summary: 'Obtiene un centro de acopio por ID',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Centro encontrado',
                        schema: { $ref: '#/definitions/CollectionCenter' }
                    }
                }
            },
            put: {
                tags: ['Collection Centers'],
                summary: 'Actualiza un centro de acopio',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        type: 'string'
                    },
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/CollectionCenter' }
                    }
                ],
                responses: {
                    200: {
                        description: 'Centro actualizado exitosamente',
                        schema: { $ref: '#/definitions/CollectionCenter' }
                    }
                }
            },
            delete: {
                tags: ['Collection Centers'],
                summary: 'Elimina un centro de acopio',
                parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    type: 'string'
                }],
                responses: {
                    200: {
                        description: 'Centro eliminado exitosamente',
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' }
                            }
                        }
                    }
                }
            }
        },
        '/collection-centers/manager/{managerId}': {
            get: {
                tags: ['Collection Centers'],
                summary: 'Obtiene centros de acopio por gestor',
                parameters: [{
                    in: 'path',
                    name: 'managerId',
                    required: true,
                    type: 'integer'
                }],
                responses: {
                    200: {
                        description: 'Centros obtenidos exitosamente',
                        schema: {
                            type: 'array',
                            items: { $ref: '#/definitions/CollectionCenter' }
                        }
                    }
                }
            }
        }
    }
};