const schemas = require('./schemas');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'SGAR Navigation API',
        description: 'API para la gestión de navegación del SGAR',
        version: '1.0.0',
        contact: {
            name: 'SGAR Support',
            url: 'https://www.sgar.sv',
            email: 'support@sgar.sv'
        }
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    },
    definitions: schemas,
    consumes: ['application/json'],
    produces: ['application/json']
};

const outputFile = './src/swagger/swagger_output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully');
});

module.exports = swaggerAutogen;