const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const Tip = require('./tips.model')

const config = {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
};

const sequelize = new Sequelize('tipster', 'postgres', 'ninako', config);

const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'model.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

db.User.hasMany(db.Tip, { as: 'tips' })
db.Tip.belongsTo(db.User)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;