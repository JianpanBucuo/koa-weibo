const { loginCheck } = require('../middlewares/logincheck')
module.exports = (router) => {
  router.get('/welcome', loginCheck, async function (ctx, next) {
    console.log(ctx.session)
    await ctx.render('welcome', {
      title: 'koa2',
      des: '1234',
      isMe: false,
      blogList: [{
        id: 1,
        title: 'aaa'
      },
      {
        id: 2,
        title: 'bbb'
      }
      ]
    })
  })
}
