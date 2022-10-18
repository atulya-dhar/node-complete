const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'incrusio0428@A', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
