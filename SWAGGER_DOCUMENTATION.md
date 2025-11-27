# Documentación de Swagger para SGAR Navigation API

## Descripción

Este proyecto utiliza **Swagger Autogen** para generar automáticamente la documentación de la API basada en los esquemas definidos en `src/swagger/schemas.js` y los comentarios JSDoc en los controladores.

## Estructura de Archivos Swagger

```
src/swagger/
├── schemas.js          # Definición de todos los esquemas de datos
├── paths.js            # Definición de los endpoints y sus operaciones
└── swaggerConfig.js    # Configuración avanzada de Swagger
```

## Instalación de Dependencias

Las siguientes dependencias ya están incluidas en `package.json`:

```bash
npm install swagger-autogen swagger-ui-express
```

## Generar Documentación de Swagger

Para generar la documentación de Swagger, ejecuta:

```bash
npm run generate-swagger
```

Este comando ejecutará `swagger.js` que generará el archivo `swagger_output.json` automáticamente.

## Acceder a la Documentación

Una vez que el servidor esté corriendo:

```bash
npm start
```

Accede a la documentación en:

```
http://localhost:3000/api-docs
```

## Estructura de Schemas

Cada esquema define la estructura esperada para un modelo. Ejemplo:

```javascript
Department: {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        nombre: { type: 'string' }
    },
    required: ['nombre']
}
```

## Endpoints Documentados

### Departamentos
- `GET /api/departments` - Obtener todos los departamentos
- `GET /api/departments/{id}` - Obtener un departamento específico
- `POST /api/departments` - Crear un nuevo departamento
- `PUT /api/departments/{id}` - Actualizar un departamento
- `DELETE /api/departments/{id}` - Eliminar un departamento

### Municipios
- `GET /api/municipalities` - Obtener todos los municipios
- `GET /api/municipalities/{id}` - Obtener un municipio específico
- `GET /api/municipalities/department/{departmentId}` - Obtener municipios por departamento
- `POST /api/municipalities` - Crear un nuevo municipio
- `PUT /api/municipalities/{id}` - Actualizar un municipio
- `DELETE /api/municipalities/{id}` - Eliminar un municipio

### Distritos
- `GET /api/districts` - Obtener todos los distritos
- `GET /api/districts/{id}` - Obtener un distrito específico
- `GET /api/districts/municipality/{municipalityId}` - Obtener distritos por municipio
- `POST /api/districts` - Crear un nuevo distrito
- `PUT /api/districts/{id}` - Actualizar un distrito
- `DELETE /api/districts/{id}` - Eliminar un distrito

### Zonas
- `GET /api/zones` - Obtener todas las zonas
- `GET /api/zones/{id}` - Obtener una zona específica
- `GET /api/zones/district/{districtId}` - Obtener zonas por distrito
- `POST /api/zones` - Crear una nueva zona
- `PUT /api/zones/{id}` - Actualizar una zona
- `DELETE /api/zones/{id}` - Eliminar una zona

### Ubicaciones de Operadores
- `GET /api/operator-locations` - Obtener todas las ubicaciones de operadores
- `GET /api/operator-locations/{id}` - Obtener una ubicación específica
- `GET /api/operator-locations/operator/{operatorId}` - Obtener ubicaciones por operador
- `GET /api/operator-locations/citizen/{citizenId}` - Obtener ubicaciones por ciudadano
- `POST /api/operator-locations` - Crear una nueva ubicación
- `PUT /api/operator-locations/{id}` - Actualizar una ubicación
- `DELETE /api/operator-locations/{id}` - Eliminar una ubicación

### Notificaciones de Ubicaciones
- `GET /api/location-notifications` - Obtener todas las notificaciones
- `GET /api/location-notifications/{id}` - Obtener una notificación específica
- `GET /api/location-notifications/location/{locationId}` - Obtener notificaciones por ubicación
- `GET /api/location-notifications/citizen/{citizenId}` - Obtener notificaciones por ciudadano
- `POST /api/location-notifications` - Crear una nueva notificación
- `PUT /api/location-notifications/{id}` - Actualizar una notificación
- `DELETE /api/location-notifications/{id}` - Eliminar una notificación

### Ubicaciones de Acopio
- `GET /api/collection-locations` - Obtener todas las ubicaciones de acopio
- `GET /api/collection-locations/{id}` - Obtener una ubicación específica
- `POST /api/collection-locations` - Crear una nueva ubicación de acopio
- `PUT /api/collection-locations/{id}` - Actualizar una ubicación de acopio
- `DELETE /api/collection-locations/{id}` - Eliminar una ubicación de acopio

### Centros de Acopio
- `GET /api/collection-centers` - Obtener todos los centros de acopio
- `GET /api/collection-centers/{id}` - Obtener un centro específico
- `GET /api/collection-centers/manager/{managerId}` - Obtener centros por gestor
- `POST /api/collection-centers` - Crear un nuevo centro de acopio
- `PUT /api/collection-centers/{id}` - Actualizar un centro de acopio
- `DELETE /api/collection-centers/{id}` - Eliminar un centro de acopio

## Agregar Nuevos Schemas

Para agregar un nuevo schema:

1. Edita `src/swagger/schemas.js`
2. Agrega la definición del schema siguiendo el patrón existente
3. Ejecuta `npm run generate-swagger`

Ejemplo:

```javascript
MyEntity: {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        field1: { type: 'string' },
        field2: { type: 'number' }
    },
    required: ['field1']
}
```

## Actualizar la Documentación

Después de hacer cambios a los schemas o agregar nuevos endpoints:

1. Ejecuta `npm run generate-swagger`
2. El archivo `swagger_output.json` se generará automáticamente
3. Recarga la página de `/api-docs` en tu navegador

## Notas Importantes

- La documentación de Swagger se genera en `swagger_output.json`
- No edites manualmente `swagger_output.json`, es generado automáticamente
- Los esquemas definen la estructura esperada para todas las operaciones
- Cada endpoint está documentado con su descripción, parámetros y respuestas esperadas
