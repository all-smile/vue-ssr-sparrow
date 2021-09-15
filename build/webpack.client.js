// // build/webpack.client.js

// const webpack = require('webpack')
// const { merge } = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// // const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
// const path = require('path')
// const resolve = dir => path.resolve(__dirname, dir)

// const base = require('./webpack.base')
// const isProd = process.env.NODE_ENV === 'production'

// module.exports = merge(base, {
//   entry: {
//     client: resolve('../src/entry-client.js')
//   },
//   plugins: isProd ? [
//     // new VueSSRClientPlugin(),
//   ] : [
//     new HtmlWebpackPlugin({
//       template: resolve('../public/index.html'),
//       filename: 'index.html'
//     })
//   ]
// })


const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    })
  ]
});
