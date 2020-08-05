/**
 * @description 微薄页面路由
 */

module.exports = (router) => {
  router.get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'Blog',
      isMe: false
    })
  })
  router.get('/blog/list', async (ctx, next) => {
    await ctx.render('blog-list', {
      title: '博客列表',
    })
  })
}
