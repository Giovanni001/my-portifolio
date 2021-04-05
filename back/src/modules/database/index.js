const Sequelize = require('sequelize');
const config = require('./config');

// Models
const Contact = require('./models/Contact');

const db = {};

const sequelize = new Sequelize(config);

// Initializing all models
const models = [Contact];

models.forEach((model) => {
  const modelInstance = model(sequelize, Sequelize.DataTypes);
  db[modelInstance.name] = modelInstance;
});

// Adding associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
