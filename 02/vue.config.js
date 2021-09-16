const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals');
const { merge } = require('lodash');

// 环境变量
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);

console.log('NODE_ENV===', process.env.NODE_ENV);
console.log('IS_PROD===', IS_PROD);

module.exports = {
  outputDir: `./dist/${target}`, // 'dist', 生产环境构建文件的目录
  css: {
    extract: IS_PROD,
  },
  configureWebpack: () => ({
    entry: `./src/entry-${target}.js`,
    devtool: 'source-map',
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined //  指定导出方式
    },
    // 外置化应用程序依赖模块，使服务器构建速度更快，并生成较小得bundle文件
    // externals: TARGET_NODE ? nodeExternals({
    //   allowlist: [/\.css$/]
    // }) : undefined,
    optimization: {
      splitChunks: TARGET_NODE ? false : undefined
    },
    // 将服务器得输出构建为单个json文件插件
    // 服务端得文件默认名`vue-ssr-server-bundle.json`
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap(options => {
  //       merge(options, {
  //         optimizeSSR: false
  //       })
  //     })
  //   config.resolve.alias // 添加别名
  //     .set('@', resolve('src'))
  // },
}
