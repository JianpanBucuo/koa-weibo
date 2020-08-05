/**
 * @description 数据模型入口文件
 */

 const User = require('./User')
 const Blog = require('./Blog')

//  查询微博 可以顺带查出用户
 Blog.belongsTo(User, {
   foreignKey:'userId',
   targetKey:'id'
 })

 // 查用户 可以查出微博
//  User.hasMany(Blog)
 module.exports = {
   User,
   Blog
 }
