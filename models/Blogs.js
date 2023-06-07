const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./Users');
const Comment = require('./Comments');
const Blogs = sequelize.define('Blogs', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  belongsto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
  
});

Blogs.hasMany(Comment, {
  onDelete: 'CASCADE'
});
module.exports = Blogs;
