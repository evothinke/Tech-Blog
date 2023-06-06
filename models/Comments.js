const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Comments = sequelize.define('Comments', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});


module.exports = Comments;
