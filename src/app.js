const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const Apirouter = new Router({
  prefix: '/api'
})
const utilsrouter = new Router({
  prefix: '/utils'
})
const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('../config')
const routes = require('./routes')
const userRoutes = require('./routes/api/user')
const blogApiRoutes = require('./routes/api/blog')
const utilsRoutes = require('./routes/api/utils')
const errorRoutes = require('./routes/view/error')
const blogRoutes = require('./routes/view/blog')
const registerRoutes = require('./routes/view/register')
const {
  REDIS_CONF
} = require('./conf/db')
const {
  APP_KEY
} = require('./conf/constant')


console.log(process.env.NODE_ENV, 'process-env-node-env')
// error handler
onerror(app)

/**
 * 设置session
 */
app.keys = [APP_KEY]

// middlewares
const staticKoa = require('koa-static')
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(staticKoa(__dirname + '/public'))
  .use(staticKoa(path.join(__dirname, '..', 'uploadFiles')))
  .use(views(path.join(__dirname, '/views'), {
    options: {
      settings: {
        views: path.join(__dirname, 'views')
      }
    },
    map: {
      'ejs': 'ejs'
    },
    extension: 'ejs'
  }))
  .use(router.routes())
  .use(Apirouter.routes())
  .use(utilsrouter.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})




routes(router)
userRoutes(Apirouter)
utilsRoutes(utilsrouter)
registerRoutes(router)
blogRoutes(router)
blogApiRoutes(Apirouter)
errorRoutes(router)

app.on('error', function (err, ctx) {
  throw Error('错误')
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
