const swaggerAutogen = require("swagger-autogen")();
const schemas = require('./src/swagger/schemas');
const paths = require('./src/swagger/paths');
const isProduction = process.env.NODE_ENV === "production";

const doc = {
  info: {
    title: "API de Navegación SGAR",
    description:
      "Documentación de la API para coordenadas y ubicaciones geográficas.",
    version: "1.0.0",
    contact: {
      name: "SGAR Support",
      url: "https://www.sgar.sv",
      email: "support@sgar.sv"
    }
  },
  host: isProduction
    ? "sgar-navigation.onrender.com"
    : "localhost:3000",
  basePath: "/",
  schemes: [isProduction ? "https" : "http"],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  definitions: schemas,
  paths: paths.paths,
  consumes: ["application/json"],
  produces: ["application/json"]
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"]; 

swaggerAutogen(outputFile, endpointsFiles, doc);
