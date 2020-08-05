/**
 * @description 连接redis的方法
 *
 */
const redis = require('redis')
const {
  REDIS_CONF
} = require('../conf/db')

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
  console.log('redis error', err)
})

/**
 *
 * @param {string} key 键
 * @param {string} value 值
 * @param {number} timeout 过期时间 单位s
 */
function set(key, value, timeout = 60 * 60) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  redisClient.set(key, value)
  redisClient.expire(key, timeout)
}
/**
 *
 * @param {string} key
 */
function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
      }
      if (val === null) {
        resolve('')
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (e) {
        resolve(val)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}
