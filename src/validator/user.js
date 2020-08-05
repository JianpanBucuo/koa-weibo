/**
 * @description User 数据格式校验
 */
const validate = require('./validate')
//  校验规则
const schema = {
  type:'object',
  properties:{
    userName: {
      type: 'string',
      maxLength:255,
      minLength:2,
      pattern:'^[a-zA-Z][a-zA-Z0-9_]+$'
    }
  }
}
//执行校验
function userValidate(data = {}) {
  return validate(schema,data)
}
module.exports = {
  userValidate
}
