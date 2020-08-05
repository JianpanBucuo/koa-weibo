const seq = require('./seq')

require('./module/index')
//测试连接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  console.log('err')
})

seq.sync({
  force: true //强制覆盖
}).then(() => {
  console.log('同步成功')
  process.exit()
})
