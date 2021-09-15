// build/webpack.base.js
const path = require('path')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: resolve('../dist') // 打包输出路径
  },
  // 扩展名
  resolve: {
    alias: {
      '@': resolve('../src')
    },
    extensions: ['.js', '.vue', '.css', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        // loader: ExtractTextPlugin.extract({
        //   use: 'css-loader',
        //   fallback: 'vue-style-loader'
        // })
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.ttf$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new ExtractTextPlugin("style.css")
  ]
}
