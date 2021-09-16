<!--
 * @Author: your name
 * @Date: 2021-09-14 15:11:59
 * @LastEditTime: 2021-09-16 17:22:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\pages\Home\index.vue
-->
<template>
  <div class="ware">
    <span @click="handle">
      home</span>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    handle() {
      console.log(12132);
    },
  },
  updated() { },
  beforeDestroy() { },
};
</script>

<style>
.ware {
  background: #ddd;
}
</style>
