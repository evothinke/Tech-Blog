const Users = require('./Users');
const Blogs = require('./Blogs');
const Comments = require('./Comments');

Users.hasMany(Blogs, {
    foreignKey: 'user_id'
});
Blogs.belongsTo(Users, {
    foreignKey: 'user_id'
});

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

Comments.belongsTo(Posts, {
    foreignKey: 'BlogId',
    onDelete: 'cascade',
    hooks: true
});

Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

Blogs.hasMany(Comment, {
    foreignKey: 'BlogId',
    onDelete: 'cascade',
    hooks:true
})

module.exports = { User, Post, Comment };