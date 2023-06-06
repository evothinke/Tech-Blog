const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const Blog = require('./Blog');


const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.hasMany(Blog, { foreignKey: 'belongsTo' });
Blog.belongsTo(User, { foreignKey: 'belongsTo' });



module.exports = User;
