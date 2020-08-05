/**
 * @description User Service
 *
 */
const User = require('../db/module/User')
const { formatUser } = require('./_formate')
const { exec } = require('../db/mysql')

async function getUserInfo (userName, passWord) {
  //查询条件
  const whereOpt = {
    userName
  }
  if (passWord) {
    Object.assign(whereOpt, { passWord })
  }
  //查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city', 'passWord'],
    where: whereOpt
  })
  if (result === null) {
    //未找到
    return result
  }
  const formatRes = formatUser(result.dataValues)
  return formatRes
}

/**
 * @description 创建用户
 * @param {userName} 用户名
 * @param {password} 密码
 * @param {gender} 性别
* @param {nickName} 昵称
 */
async function createUser ({ userName, passWord, gender = 2, nickName = '', }) {
  const result = await User.create({
    userName,
    passWord,
    gender,
    nickName
  })
  console.log('result.dataValues', result)
  return result.dataValues
}

async function updateUser ({ newNickName = '', newCity = '', newPicture = '' },
  { userName, passWord }) {
  let changInfoSql = 'set'

  changInfoSql += ` nickName = '${newNickName}',`
  changInfoSql += `city = '${newCity}',`
  changInfoSql += `picture = '${newPicture}'`
  //
  const sql = `update users ${changInfoSql} where userName = '${userName}' and \`password\` = '${passWord}'`
  console.log(sql)
  const sqlRes = await exec(sql)
  console.log(sqlRes)
  if (sqlRes.affectedRows > 0) {

    return {
      nickName: newNickName,
      picture: newPicture,
      city: newCity
    }
  }

}

module.exports = {
  getUserInfo, createUser, updateUser
}
