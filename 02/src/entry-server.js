// 渲染首屏
import { createApp } from "./app";

// node服务器调用
export default (context) => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { url } = context
    const { app, router } = createApp()
    const { fullPath } = router.resolve(url).route

    console.log('fullPath', fullPath);

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    // 设置服务器端 router 的位置
    router.push(context.url)

    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 }) // 上层process.on 'unhandledRejection'
      }

      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      resolve(app)
    }, reject)
  }).catch(error => console.log('router', error))
};

