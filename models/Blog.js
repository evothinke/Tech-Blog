const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Comment = require('./Comments');
const Blog = sequelize.define('Blog', {
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

Blog.hasMany(Comment, {
  onDelete: 'CASCADE'
});
module.exports = Blog;
