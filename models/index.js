const User = require('./User');
const Post = require('./posts');
const Comment = require('./comments');

User.hasMany(Post, {
    foreignKey: "user_name",
    onDelete: "CASCADE",
  });
  
  Post.belongsTo(User, {
    foreignKey: "user_name",
  });
  
  Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
  });
  
  Comment.belongsTo(Post, {
    foreignKey: "post_id",
  });
  
  User.hasMany(Comment, {
    foreignKey: "user_name",
    onDelete: "CASCADE",
  });
  
  Comment.belongsTo(User, {
    foreignKey: "user_name",
  });
module.exports = { User, Post, Comment };