const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')

const con = mysql.createConnection(MYSQL_CONF)
con.connect()

function exec (sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        console.log('mysql error:', err)
        reject()
      }
      resolve(result)
      return

    })
  })
}
// con.end(); //保持连接

module.exports = {
  exec
}
