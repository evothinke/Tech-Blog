const Users = require('./Users');
const Blogs = require('./Blogs');
const Comments = require('./Comments');
const sequelize = require('../config/connection');

Users.hasMany(Blogs, {
  foreignKey: 'belongsto',
  onDelete: 'cascade',
  hooks: true
});
Blogs.belongsTo(Users, {
  foreignKey: 'belongsto'
});

Comments.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true
});

Comments.belongsTo(Blogs, {
  foreignKey: 'blogId',
  onDelete: 'cascade',
  hooks: true
});

Users.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true
});

Blogs.hasMany(Comments, {
  foreignKey: 'blogId',
  onDelete: 'cascade',
  hooks: true
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
    // Start your server or perform any other operations
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

module.exports = { Users, Blogs, Comments };
