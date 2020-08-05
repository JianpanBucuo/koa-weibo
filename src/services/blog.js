/**
 * @description 微博 service
 */
const Blog = require('../db/module/Blog')

async function createBlog ({ userId, content, image
}) {
  const result = await Blog.create({
    userId,
    content,
    image
  })
  return result.dataValues
}
async function getBlogList () {
  console.log('getBlogList')
  const result = await Blog.findAll({
    order: [
      ['id', 'desc']
    ]
  })
  const resultList = result.map(blogList => {
    return blogList.dataValues
  })
  return resultList
}
module.exports = {
  getBlogList, createBlog
}
