<template>
  <div class="home-scroll">
    <div class="scroll_1">
      <div class="content">
        <p class="text"></p>
      </div>
    </div>
    <div class="scroll_2"></div>
  </div>
</template>

<script>
//首页通用样式
//import "./scss/homeCommon.scss";

//import { isLogin } from "@/utils/auth";

export default {
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.home-scroll {
  .scroll_1 {
    height: calc(100vh);
    width: calc(194vh);
    background: url("~@/assets/home-page/scroll_1.jpg") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .scroll_2 {
    height: calc(100vh);
    width: 100%;
    background-color: antiquewhite;
    background-size: 100% 100%;
    background-attachment: fixed;
  }
}
</style>
