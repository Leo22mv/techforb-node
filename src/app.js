const express = require("express");
const sequelize = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

const cors = require("cors");

app.use(cors({
  // origin: "http://localhost:4200",
  origin: "https://techforb-challenge.web.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// const authenticateJWT = require("./middleware/auth");

// app.use(authenticateJWT);

const plantRoutes = require('./route/plantRoutes');

app.use('/api', plantRoutes);

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3000, () => {
      console.log(`Servidor escuchando en el puerto 3000`);
    });
  })
  .catch(err => console.error('No se pudo sincronizar la base de datos:', err));

app.use(errorHandler);

module.exports = app;