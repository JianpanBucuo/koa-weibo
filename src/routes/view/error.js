/**
 * @description error
 *
 */
module.exports = (router) => {
  router.get('/error', async (ctx, next) => {
    await ctx.render('error', {
      message: '测试',
      error: {
        status: '123',
        stack: '456'
      }
    })
  })
  router.get('*', async (ctx, next) => {
    await ctx.render('error', {
      message: '没有找到文件',
      error: {
        status: 404,
        stack: '404'
      }
    })
  })
}
