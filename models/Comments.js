const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./Users');

const Comments = sequelize.define('Comments', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  },
});


module.exports = Comments;
