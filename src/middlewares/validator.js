/**
 * @description JSON schema 验证中间件
 */
const { ErrorModel } = require('../models/ResModel')
const { userValidate } = require('../validator/user')
const { ValidateFailed } = require('../models/ErrorInfo')
function genValidator (validateFunc) {
  async function validator (ctx, next) {
    console.log(ctx)
    const data = ctx.request
    const error = validateFunc(data)
    if (error) {
      //
      ctx.body = new ErrorModel(ValidateFailed)
    }
    await next()
  }
  return validator
}
const userValitor = genValidator(userValidate)
module.exports = {
  userValitor
}
