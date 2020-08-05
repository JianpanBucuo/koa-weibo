/**
 * @description 用户相关路由
 * @author JinJian
 */
const { isExist, register, login, logout, changUserInfo } = require('../../controller/user')
const { userValitor } = require('../../middlewares/validator')
const { loginCheck } = require('../../middlewares/logincheck')
module.exports = (router) => {

  router.post('/user/register', userValitor, async (ctx, next) => {
    const { userName, passWord, gender } = ctx.request.body
    ctx.body = await register({ userName, passWord, gender })
  })
  router.post('/user/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body
    ctx.body = await isExist(userName)
    //controller
  })
  router.post('/user/login', async (ctx, next) => {
    const { userName, passWord } = ctx.request.body

    ctx.body = await login(ctx, userName, passWord)
  })
  router.post('/user/logout', async (ctx, next) => {
    ctx.body = await logout(ctx)
  })
  router.post('/user/change', loginCheck, async (ctx, next) => {
    const { nickName, city, picture } = ctx.request.body
    ctx.body = await changUserInfo(ctx, { nickName, city, picture })
  })
}
