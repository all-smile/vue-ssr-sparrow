// 挂载、激活app
import { createApp } from "./app.js";

// 客户端特定引导逻辑……

const { app, router } = createApp();
// 这里假定 App.vue 模板中根元素具有 `id="app"`
// true 强制使用应用程序的激活模式
// app.$mount('#app', true)

router.onReady(() => {
  app.$mount("#app");
});
