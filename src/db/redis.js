const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', err => {
  console.log(err)
})

function set (key, value) {
  if (typeof value == 'object') {
    value = JSON.stringify(value)
  }
  redisClient.set(key, value, redis.print)
}
function get (key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, value) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      if (value == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(value))
      } catch (ex) {
        resolve(value)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}
