/**
 * @description json schema 校验
 */

const Ajv = require('ajv')
const ajv = new Ajv(
  {
    allErrors: true
  }
)
/**
 *
 * @param {} schema json schema规则
 * @param {} data 待校验数据
 */
function validate(schema, data) {
  const valid = ajv.validate(schema, data)
  if(!valid) {
    return ajv.errors[0]
  }
}
module.exports = validate
