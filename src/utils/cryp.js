/**
 * @description 加密方法
 */

 const crypto = require('crypto')
 const {SECRET_KEY} = require('../conf/constant')
 //密钥


 function md5 (content) {
   const md5 = crypto.createHash('md5')
   return md5.update(content).digest('hex')
 }
 /**
  * @description 加密方法
  * @param {} content
  */
 function doCrypto(content) {
   const str = `password=${content}&key=${SECRET_KEY}`

   return md5(str)
 }

 module.exports = doCrypto
