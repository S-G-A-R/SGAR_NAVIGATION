const swaggerAutogen = require("swagger-autogen")();
const isProduction = process.env.NODE_ENV === "production";

const doc = {
  info: {
    title: "API de Navegación SGAR",
    description: "Documentación de la API para coordenadas y ubicaciones geográficas."},
  host: isProduction ? "https://sgar-navigation.vercel.app" : "localhost:3000",
  schemes: [ isProduction ? "https" : "http" ],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"]; 

swaggerAutogen(outputFile, endpointsFiles, doc);
