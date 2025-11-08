const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/database');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

dotenv.config(); // carga variables .env
connectDB();     // conecta a MongoDB

const app = express();
const PORT = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

// Configuración de CORS
const corsOptions = {
    origin: '*', // Permite todas las origenes
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    exposedHeaders: ['Content-Range', 'X-Content-Range'], // Headers expuestos
    credentials: true, // Permite credenciales
    maxAge: 86400 // Tiempo máximo de cache para los resultados de las solicitudes preflight
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
const departmentRoutes = require('./src/routes/departments');
const municipalityRoutes = require('./src/routes/municipalities');
const districtRoutes = require('./src/routes/districts');
const zoneRoutes = require('./src/routes/zones');
const operatorLocationRoutes = require('./src/routes/operatorLocations');
const locationNotificationRoutes = require('./src/routes/locationNotifications');
const collectionLocationRoutes = require('./src/routes/collectionLocations');
const collectionCenterRoutes = require('./src/routes/collectionCenters');


// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// API routes
app.use('/departments', departmentRoutes 
    /*
    #swagger.tags = ['Departments']
    */
);
app.use('/municipalities', municipalityRoutes
    /*
    #swagger.tags = ['Municipalities']
    */
);
app.use('/districts', districtRoutes
    /*
    #swagger.tags = ['Districts']
    */
);
app.use('/zones', zoneRoutes
    /*
    #swagger.tags = ['Zones']
    */
);
app.use('/operator-locations', operatorLocationRoutes
    /*
    #swagger.tags = ['Operator Locations']
    */
);
app.use('/location-notifications', locationNotificationRoutes
    /*
    #swagger.tags = ['Location Notifications']
    */
);
app.use('/collection-locations', collectionLocationRoutes
    /*
    #swagger.tags = ['Collection Locations']
    */
);
app.use('/collection-centers', collectionCenterRoutes
    /*
    #swagger.tags = ['Collection Centers']
    */
);



app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://${hostname}:${PORT}`);
});

