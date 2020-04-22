'use strict'

const typeorm = require('./dist/index').default
const assert = require('assert')
//
module.exports = app => {
  assert(!!app.config.typeorm, '缺少 config.typeorm 配置')
  typeorm(app)
}
