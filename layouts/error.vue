<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-08 09:53:45
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-08 09:58:24
-->
<template>
  <div class="err_wrap">
    <h1 class="error" v-if="error.statusCode === 404">页面不存在或没有数据</h1>
    <h1 class="error" v-else>应用发生错误异常</h1>
    <nuxt-link class="to_home" to="/">返回首页</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "detail",
  data() {
    return {
      msg: "未找到相应页面或没有数据",
    };
  },
  head() {
    return {
      title: "我是报错",
      meta: [],
    };
  },
};
</script>
<style scoped>
.err_wrap {
  padding: 0.2rem 0.4rem;
  text-align: center;
}
.error {
  font-size: 0.32rem;
  text-align: center;
  padding-top: 55%;
  color: #582c1a;
  padding-bottom: 0.4rem;
}
.to_home {
  font-size: 0.3rem;
  color: #582c1a;
  display: inline-block;
  padding-bottom: 3.9rem;
}
</style>