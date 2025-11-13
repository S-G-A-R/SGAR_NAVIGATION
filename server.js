const app = require('express')();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/database');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");



dotenv.config(); // carga variables .env
connectDB();     // conecta a MongoDB

const PORT = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';



// Configuración de CORS
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    exposedHeaders: ['Content-Range', 'X-Content-Range'], 
    credentials: true, 
    maxAge: 86400 
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

const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://${hostname}:${PORT}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  },
});
const OperatorLocation = require('./src/models/OperatorLocation');


// Logica de Socket.io para actualizaciones en tiempo real de ubicaciones de operadores
// El operador envía desde Blazor su ubicación actual
// Los ciudadanos reciben en Blazor las ubicaciones actualizadas de los operadores
io.on('connection', (socket) => {
  console.log(`Un cliente se conectó: ${socket.id}`);

  socket.on('actualizarUbicacion', async (data) => {

    console.log(`Ubicación recibida del operador ${data.idOperador}: `, data);
    
    try {
      const ubicacionActualizada = await OperatorLocation.findOneAndUpdate(
        { idOperador: data.idOperador }, 
        { 
          idHorario: data.idHorario,
          location: {
            type: 'Point',
            coordinates: [data.lon, data.lat] // GeoJSON es [Longitud, Latitud]
          },
          fechaActualizacion: Date.now()
        },
        { 
          upsert: true, // Si no existe, lo crea
          new: true      // Devuelve el documento actualizado
        }
      );
      
      io.emit('nuevaUbicacionOperador', ubicacionActualizada); 

    } catch (err) {
      console.error("Error al guardar/emitir ubicación: ", err);
      // socket.emit('errorUbicacion', { message: 'No se pudo procesar tu ubicación' });
    }
  });

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});



