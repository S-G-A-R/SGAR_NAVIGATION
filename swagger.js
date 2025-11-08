const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API de Navegación SGAR",
    description: "Documentación de la API para coordenadas y ubicaciones geográficas."},
  host: "https://sgar-navigation.vercel.app",
  schemes: ["http"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"]; 

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require("./server.js"); 
});
