const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('techforb-challenge', 'root', '159753258456Leo', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
