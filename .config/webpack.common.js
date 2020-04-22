//
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
// 对babel的配置，内容同.babelrc文件
const babelOptions = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ]
}
//
module.exports = {
  entry: ['babel-polyfill', './src/index.ts'],
  output: {
    // The output directory as an absolute path.
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  externals: {},
  module: {
    // 排除那些大型的库且已经编译好的库排除,将不再扫描这个文件中的依赖,减少webpack对其解析耗时
    // noParse: [/node_modules\/(pixi.js)\//],
    rules: [
      {
        test: /\.ts(x?)?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', options: babelOptions },
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      }
    ]
  },
  // 使用 source-map
  devtool: 'inline-source-map',
  plugins: [new WebpackBar(), new CleanWebpackPlugin()]
}
