const Sequelize = require('sequelize');
const sequelize = new Sequelize('blogpost_db', 'root', 'instax01Aq#@', {
  host: 'localhost',
  dialect: 'mysql', 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
