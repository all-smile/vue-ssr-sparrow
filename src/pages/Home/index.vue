<!--
 * @Author: your name
 * @Date: 2021-09-14 15:11:59
 * @LastEditTime: 2021-09-15 20:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\pages\Home\index.vue
-->
<template>
    <div class="ware">
        <span @click="handle">test</span>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {},
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {
        handle() {
            console.log(12132);
        }
    },
    updated() { },
    beforeDestroy() { },
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
// @import "./index.less";
.ware {
    background: #ddd;
}
</style>
