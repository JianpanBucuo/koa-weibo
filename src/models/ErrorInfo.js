/**
 * @description 失败信息集合 包括 errorno 和 msg
 *
 */
module.exports = {
  loginFailedInfo: {
    code: '0001',
    msg: '用户登录失败'
  },
  UserNotLogin: {
    code: '0001',
    msg: '用户未登录'
  },
  UserNotExistInfo: {
    code: '0001',
    msg: '用户不存在'
  },
  UserAlreadyExist: {
    code: '0001',
    msg: '用户名已存在'
  },
  CreateUserFailed: {
    code: '0001',
    msg: '创建用户失败'
  },
  ValidateFailed: {
    code: '0001',
    msg: '用户信息输入有误'
  }
}
