const User = require('./User');
const Blogs = require('./Blogs');

User.hasMany(Blogs, {
    foreignKey: 'blog_author',
    onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
    foreignKey: 'blog_author'
});

module.exports = { User, Blogs }