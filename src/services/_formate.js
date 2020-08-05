/**
 *
 * @description 数据格式化
 *
 */
const {defaultPicture} = require('../conf/constant')
/**
 *
 * @param {Object} obj
 */

function _formateUserPicture(obj) {
  if(obj.picture == null) {
    obj.picture = defaultPicture
  }
  return obj
}
/**
 * @description
 * @param {Object|Array} list 用户对象 或用户列表
 */
function formatUser(list) {
  if(list == null ) {
    return list
  }
  if(list instanceof Array) {
    return list.map(_formateUserPicture)
  }
  //单个对象
  return _formateUserPicture(list)
}

module.exports = {
  formatUser
}
