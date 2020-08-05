/**
 * @description 微博
 */
const { createBlog, getBlogList } = require('../services/blog')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const xss = require('xss')
async function create ({ userId, content, image }) {
  //service
  content = xss(content)
  try {
    const result = await createBlog({ userId, content, image })
    console.log('添加微博:', result)
    return new SuccessModel({
      data: '添加成功',
      code: '0000'
    })
  } catch (e) {
    return new ErrorModel({
      code: '0001',
      data: '添加失败'
    })
  }
}
async function getList () {
  //service
  try {
    const result = await getBlogList()
    console.log('微博列表:', result)
    return new SuccessModel(
      result
    )
  } catch (e) {
    return new ErrorModel({
      code: '0001',
      data: '获取博客列表失败'
    })
  }
}

module.exports = {
  create, getList
}
