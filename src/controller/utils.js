/**
 *@description util Controller
 */
const path = require('path')
const fse = require('fs-extra')
const {SuccessModel, ErrorModel} =require('../models/ResModel')
// 1M
const MAX_SIZE = 1024 * 1024 * 1024
//存储目录
const DIST_FOLDER_PATH = path.join(__dirname,'../../uploadFiles')
// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then(exist => {
  if(!exist){
    fse.ensureDir(DIST_FOLDER_PATH)

  }
})
async function saveFile({name, type, size, filePath}) {
  console.log('controller',name, type, size, filePath)
  if(size > MAX_SIZE) {
    await fse.remove(filePath)
    return new ErrorModel({
      code:'0001',
      msg:'文件太大'
    })
  }
  //移动文件
  const fileName = Date.now() + '.' + name //防止重名
  const disFilePath = path.join(DIST_FOLDER_PATH,fileName)
  await fse.move(filePath, disFilePath)
  return new SuccessModel({
    url:'/' + fileName

  })

}
module.exports = {
  saveFile
}
