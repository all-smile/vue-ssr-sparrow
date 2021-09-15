const path = require('path')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const resolve = dir => path.resolve(__dirname, dir)

const base = require('./webpack.base')
console.log('====================================');
console.log(merge);
console.log('====================================');
module.exports = merge(base, {
  entry: {
    server: resolve('../src/entry-server.js')
  },
  target: 'node', // 服务端打包好的 JS 是给node使用
  output: {
    libraryTarget: 'commonjs2' //  指定导出方式
  },
  plugins: [
    // new VueSSRServerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.ssr.html',
      template: resolve('../public/index.ssr.html'),
      minify: false, // 不压缩，不会删除注释
      excludeChunks: ['server']
    })
  ]
})
