const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('boqv2zzia96q96jlpalu', 'uiiwyob2q3agwdmw', 'ltkerYAHnxz00wRXnJGQ', {
  host: 'boqv2zzia96q96jlpalu-mysql.services.clever-cloud.com',
  dialect: 'mysql',
});

module.exports = sequelize;
