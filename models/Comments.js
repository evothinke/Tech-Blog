const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(


  {
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
    blogId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Comments',
        key: 'id'
      }

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
