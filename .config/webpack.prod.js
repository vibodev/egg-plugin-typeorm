const merge = require('webpack-merge')

let common = require('./webpack.common.js')

module.exports = merge(common,{
  mode: 'production'
})
