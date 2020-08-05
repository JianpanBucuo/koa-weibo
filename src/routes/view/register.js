const {loginCheck} = require('../../middlewares/logincheck')
module.exports = (router) => {
  function getLoginInfo(ctx) {
    const data = {
      isLogin: false //默认未登录
    }
    if(ctx.session) {
      data.isLogin = true
      // data.userName = ctx.session.userInfo.userName
      Object.assign(data, ctx.session.userInfo)
    }


    return data
  }
  router.get('/register', async (ctx, next) => {
    await ctx.render('register', {
      locals:  {
        isLogin:false
      },
      title: '注册'
    })
  })
  router.get('/login', async (ctx, next) => {
    console.log(getLoginInfo(ctx))
    await ctx.render('login', {
      locals: getLoginInfo(ctx),
      // locals:{
      //   isLogin:false
      // },
      title: '登录'
    })
  })
  router.get('/setting',loginCheck, async (ctx, next) => {
    console.log(getLoginInfo(ctx))
    await ctx.render('setting',{
      locals:getLoginInfo(ctx),
      title:'修改个人信息'
    })
  })
}
