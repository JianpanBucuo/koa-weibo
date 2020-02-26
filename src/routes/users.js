module.exports =  (router) => {
  router.get('/user', async function (ctx, next) {
    ctx.body = 'this a users response!';
  })
  router.get('/user/:username/:pageIndex', async function (ctx, next) {
    const {username,pageIndex} = ctx.params
    ctx.body ={ title:'this a users response!',username,pageIndex};
  })
  router.post('/login', async function(ctx, next) {
    const {username, password} = ctx.request.body
    ctx.body = {
      username, password
    }
  })
}
