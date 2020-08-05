/**
 * @description 微博数据模型
 */
const seq = require('../seq')
const {
  STRING,DECIMAL,TEXT,INTEGER
} = require('../types')

const Blog = seq.define('blog',{
  userId:{
    type: INTEGER,
    allowNull: false,
    comment: 'userId'
  },
  content:{
    type: TEXT,
    allowNull: false,
    comment: '微博内容'
  },
  image:{
    type:STRING,
    comment:'图片地址'
  }
})
module.exports = Blog

