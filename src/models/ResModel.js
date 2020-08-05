/**
 * @description 输出 response 业务模型
 */

 /**
  * @description 基础模块
  */
class BaseModel {
  constructor({code, data = {}, msg}){
    this.code = code
    this.data = data
    this.msg = msg
  }
}

/**
 * @description 成功模块
 */
class SuccessModel extends BaseModel{
  constructor(data = {}) {
    super({
      code:'0000',
      data,
      msg:'成功'})
  }
}

/**
 * @description 失败模块
 */

class ErrorModel extends BaseModel {
  constructor({code, msg,data}){
    super({
      code,
      msg,
      data
    })
  }
 }

module.exports = {
  ErrorModel,
  SuccessModel
}
