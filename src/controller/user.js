/**
 * @description User Controller
 * @author Jinjian
 */
const {set} = require('../db/redis')
const {getUserInfo,createUser,updateUser} = require('../services/user')
const {SuccessModel, ErrorModel} =require('../models/ResModel')
const doCrypto = require('../utils/cryp')
const {UserNotExistInfo,UserAlreadyExist,CreateUserFailed,loginFailedInfo} = require('../models/ErrorInfo')


/**
  *用户名是否存在
  * @param {string} userName
  */
async function isExist(userName) {
  //业务逻辑处理
  //统一返回格式
  //调用 service 获取数据
  const userInfo = await getUserInfo(userName)
  if(userInfo){
    return new SuccessModel(userInfo)
  } else{
    return new ErrorModel(UserNotExistInfo)
  }

}
/**
 *
 * @param {String} userName
 * @param {String} password
 * @param {Number} gender 0：男 1：女
 */
async function register ({
  userName,passWord, gender
}) {
  const userInfo = await getUserInfo(userName)
  console.log(userInfo)
  if(userInfo) {
    return new ErrorModel(UserAlreadyExist)
  } else {
    try {

      await createUser({userName,passWord:doCrypto(passWord), gender})
      return new SuccessModel()
    }catch(e){
      return new ErrorModel(CreateUserFailed)
    }
  }
}

/**
 * @description 登录
 */
async function login(ctx,userName, passWord) {
  //登录成功 ctx.session.userInfo =

  const userInfo = await getUserInfo(userName, doCrypto(passWord))
  if(!userInfo) {
    return new ErrorModel(loginFailedInfo)
  }
  const userId = `${Date.now()}_${Math.random()}`
  var hour = 3600000
  ctx.cookies.set('userId',userId,{
    httpOnly:true,
    expires: new Date(Date.now() + hour)
  })
  set(userId,userInfo)
  return new SuccessModel()
}
async function logout(ctx) {
  ctx.session = {}
  ctx.cookies.set('userId','')
  return new SuccessModel()
}

async function changUserInfo(ctx,{nickName, city, picture}) {
  const userName = ctx.session.userInfo.userName
  const passWord =   ctx.session.userInfo.passWord
  if(!nickName) {
    nickName = userName
  }
  const userInfo = await updateUser({newNickName:nickName,newCity:city, newPicture:picture},{
    userName,passWord
  })
  if(userInfo) {
    Object.assign(ctx.session.userInfo ,userInfo)
    set(ctx.cookies.get('userId'),ctx.session.userInfo)
    return new SuccessModel()
  } else {
    return new ErrorModel({code:'0001', msg:'修改失败'})
  }
  //调用service 做修改
}

module.exports = {
  isExist,register,login,logout,changUserInfo
}

