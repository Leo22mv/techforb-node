const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plant = sequelize.define('Plant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  readings: {
    type: DataTypes.INTEGER,
  },
  mediums: {
    type: DataTypes.INTEGER,
  },
  reds: {
    type: DataTypes.INTEGER,
  },
  disableds: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: true,
});

module.exports = Plant;