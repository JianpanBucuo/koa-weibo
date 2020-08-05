/**
 *
 * @description 存储配置
 * @author 金健
 * */
const isPro = process.env.NODE_ENV == 'production'
const MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'jinjian94530!@',
  port: '3306',
  database: 'koablog'
}
const REDIS_CONF = {
  port: '6379',
  host: '127.0.0.1',
  key: 'weibo.sid', // cookie name  默认是 koa.sid
  prefix: 'weibo:sess:', //redis key的前缀 默认是 koa:sess
  cookie: {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 1000,
  },
  ttl: 60 * 60 * 1000,
}
module.exports.REDIS_CONF = REDIS_CONF
module.exports.MYSQL_CONF = MYSQL_CONF
