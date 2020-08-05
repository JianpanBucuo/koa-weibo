/**
 * @description 验证登录中间件
 */
const { ErrorModel } = require('../models/ResModel')
const { UserNotLogin } = require('../models/ErrorInfo')
const { get } = require('../db/redis')


async function loginCheck (ctx, next) {
  // if(ctx.session && ctx.session.userInfo) {
  const userId = ctx.cookies.get('userId')
  console.log(userId, 'userId')
  if (userId == undefined) {
    ctx.redirect('/login?url' + encodeURIComponent(ctx.url))

  } else {
    // 从redis 获取 用户信息
    const userInfo = await get(userId)
    if (userInfo !== null) {
      ctx.session = {}
      ctx.session.userInfo = userInfo
      await next()
      return
    }
  }


  // return
}
//未登录
// ctx.body = new ErrorModel(UserNotLogin)

async function loginRedirect (ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    await next()
    return
  }
  ctx.redirect('/login?url' + encodeURIComponent(ctx.url))
}
module.exports = {
  loginCheck, loginRedirect
}
