const Vue = require('vue')
const express = require('express')
const app = express()
const fs = require("fs");
const path = require("path");
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
// 客户端清单
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')
// 宿主模板文件
const serverTemplate = fs.readFileSync(
  "./public/index.temp.html",
  "utf8"
);

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: serverTemplate,
  clientManifest, // 注入前端打包好的 js 文件
})

// 中间件处理静态文件请求
app.use(express.static('../dist/client'));
// app.use(express.static('../dist/client', { index: false }));

// 路由的处理交给vue
app.get('*', async (req, res) => {
  const context = {
    url: req.url,
    title: 'ssr test'
  }
  const html = await renderer.renderToString(context)
  console.log('html', html);
  res.send(html)
})

app.listen(8089, () => {
  console.log('服务启动成功');
})