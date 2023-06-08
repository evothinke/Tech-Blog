const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
  {
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    BlogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Blogs',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments'
  }
);


module.exports = Comments;
