/**
 * @description utils API路由
 */
const { loginCheck } = require('../../middlewares/logincheck')
const koaForm = require('formidable-upload-koa')
const { saveFile } = require('../../controller/utils')
const options = {
  uploadDir: `${__dirname}/`,
  keepExtensions: true
}
module.exports = (router) => {
  router.post('/upload', loginCheck, koaForm(options), async (ctx, next) => {
    const file = ctx.req.files['file']
    console.log('in upload')
    const { size, path, name, type } = file

    console.log(size, path, name, type)
    ctx.body = await saveFile({
      name,
      type,
      size,
      filePath: path
    })
  })
}
