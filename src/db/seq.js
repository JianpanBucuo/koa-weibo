/**
 *
 *
 * @description 存储配置
 *
 *
 */
const Sequelize = require('sequelize')
const {
  MYSQL_CONF
} = require('../conf/db')
const {
  host,
  user,
  password,
  port,
  database
} = MYSQL_CONF
const seq = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  pool: {
    max: 5, //最大连接数
    min: 0, //最小
    idle: 10000 //如果10s内没有被使用 则释放
  }
})
module.exports = seq
