<!--
 * @Author: your name
 * @Date: 2021-09-14 14:46:38
 * @LastEditTime: 2021-09-14 20:39:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\App.vue
-->
<template>
    <div id="app" class="Main">
        <home-page></home-page>
    </div>
</template>

<script>
import Home from '@/pages/Home/index.vue'
export default {
    name: 'App',
    props: {},
    components: {
        'home-page': Home
    },
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() { },
    methods: {},
    updated() { },
    beforeDestroy() { }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
// .Main {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     overflow-y: auto;
// }
</style>
