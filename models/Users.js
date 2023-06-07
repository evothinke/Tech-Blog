const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const Blog = require('./Blogs');
const Comments = require('./Comments');
const bcrypt = require('bcrypt');
const sequelize = require('../database');


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
},
{
  sequelize,
  modelName: 'User',
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;
    },
    beforeUpdate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
      }
    }
  }
}

);

User.hasMany(Blog, { foreignKey: 'belongsTo' });
//User.hasMany(Comments, {foreignKey: 'commentleftby'});
Blog.belongsTo(User, { foreignKey: 'belongsTo' });
//Comments.belongsTo(User, {foreignKey: 'commentleftby'});


module.exports = User;
