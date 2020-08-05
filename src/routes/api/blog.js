const { loginCheck } = require('../../middlewares/logincheck')
const { create, getList } = require('../../controller/blog')
module.exports = (router) => {
  router.post('/blog/add', loginCheck, async (ctx, next) => {
    const { id } = ctx.session.userInfo
    console.log(ctx.session.userInfo)
    const { content, image } = ctx.request.body


    ctx.body = await create({ userId: id, content, image })
  })
  router.post('/blog/list', async (ctx, next) => {
    ctx.body = await getList()
  })
}
