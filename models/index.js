const Sequelize = require('sequelize');
const config = require('../config/config.json');
const Comments = require('../models/Comments');


const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Blog = require('./Blogs')(sequelize, Sequelize);
db.User = require('./Users')(sequelize, Sequelize);

module.exports = db;
