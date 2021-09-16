const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

const page = new Vue({
  template: '<div>hello vue ssr, 你好</div>'
})

server.get('*', async (req, res) => {
  console.log('url', req.url);
  const html = await renderer.renderToString(page)
  console.log('html', html);
  res.send(html)
})

server.listen(8089, () => {
  console.log('服务启动成功');
})