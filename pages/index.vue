<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-07 11:01:14
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-20 11:51:13
-->

<style lang="scss">
.className {
  color: #fff;
  background: red;
}
.fluxslider {
  display: block;
  margin: 0 auto;
}
</style>
<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->

      <!-- data-wow-duration="2s"
        data-wow-delay="5s" -->
      <h1 class="title wow animate__bounce">webfewfwe</h1>
      <span @click="spanClick" class="className">我是自定义class</span>
      <div class="wow title animate__bounce backOutLeft">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>
      <z-but></z-but>
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ item.good_name }}</li>
      </ul>
    </div>

    <section class="container">
      <h1>3D Image Transitions</h1>
      <h2>Mozilla Dev Derby March 2012</h2>

      <div id="slider">
        <img src="images/peacock.jpg" alt="" />
        <img src="images/koi.jpg" alt="" />
        <img src="images/life.jpg" alt="" />
      </div>

      <ul class="transitions">
        <li>
          <button type="button" data-transition="explode">Explode</button>
        </li>
        <li>
          <button type="button" data-transition="tiles3d">Tile</button>
        </li>
        <li><button type="button" data-transition="bars3d">Bars</button></li>
        <li><button type="button" data-transition="cube">Cube</button></li>
        <li><button type="button" data-transition="turn">Turn</button></li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from "axios";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
export default {
  data() {
    return {
      list: [],
    };
  },
  head() {
    return {
      title: "自定义title",
      meta: [],
    };
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    var list = [];
    this.$nextTick((v) => {
      window.f = new flux.slider("#slider", {
        pagination: true,
        controls: false,
        transitions: ["explode", "tiles3d", "bars3d", "cube", "turn"],
        autoplay: false,
      });

      $(".transitions").click(function (event) {
        event.preventDefault();
        window.f.next($(event.target).data("transition"));
      });
      this.$nextTick((s) => {
        var wow = new WOW({
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      });
    });
    // var { status, data } = await axios.get(
    //   "http://127.0.0.1:8031/hosnode/mall_goods_info/queryList"
    // );
    // console.log(data);
  },
  async asyncData(context) {
    try {
      if (process.server) {
        var list = [];
        await axios
          .get("http://127.0.0.1:8031/hosnode/mall_goods_info/queryList")
          .then((s) => {
            list = s.data.data.data;
          })
          .then((v) => {
            console.log(v);
          });
        return {
          project: "nuxt",
          list,
        };
      }
    } catch (error) {
      console.log(error);
      // context.error({ statusCode: 404, message: "页面未找到或无数据" }); //修改成这样就可以跳到错误提示页面
    }
  },
  methods: {
    spanClick() {
      this.$router.push({ path: "home/pt/" });
    },
  },
};
</script>
