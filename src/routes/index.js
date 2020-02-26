module.exports =  (router) => {
  router.get('/welcome', async function (ctx, next) {
    // ctx.state = {
    //   title: 'koa2 ',
    //   des:' Des'
    // };


    await ctx.render('welcome', {
                title: 'koa2',
                des: '1234',
                isMe: false,
                blogList:[
                  {
                    id:1,
                    title: 'aaa'
                  },
                  {
                    id:2,
                    title:'bbb'
                  }
                ]
              });
  })
}
