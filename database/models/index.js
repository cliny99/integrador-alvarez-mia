'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configPath = path.join(__dirname, '..', 'config', 'config.js');
const config = require(configPath)[process.env.NODE_ENV];

if (!config) {
  throw new Error(`No se encontró configuración para el entorno: ${process.env.NODE_ENV}`);
}

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port || 3306,
  }
);

// Carga los modelos
fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')  // IMPORTANTE ignorar index.js
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


// Configura asociaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;