<!--
 * @Author: your name
 * @Date: 2021-09-16 13:48:46
 * @LastEditTime: 2021-09-16 15:02:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr-sparrow\02\src\App.vue
-->
<template>
    <div id="app">
        <nav>
            <router-link to='/'>首页</router-link>
            <router-link to='/my'>我的</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    components: {},
};
</script>
  
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
