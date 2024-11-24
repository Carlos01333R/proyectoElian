const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const reservationRoutes = require('./routes/reservations');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/reservations', reservationRoutes);

// Servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
