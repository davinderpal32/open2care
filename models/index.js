'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const JoiSequelize = require('joi-sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../.env')[env];
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  sequelize = new Sequelize(`${process.env.database}`, `${process.env.username}`, `${process.env.password}`,{host: `${process.env.host}`,dialect: 'mysql'});
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    // db.JS[model.name] = new JoiSequelize(require(path.join(__dirname, file)));
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
