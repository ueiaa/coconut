<template>
  <div class="home-content">
    <Banner></Banner>
    <Scroll></Scroll>
    <!-- <Banner :isLogin="isLogin" />
  
      <SubTab :isLogin="isLogin" />
  
      <Approve :isLogin="isLogin" />
  
      <Appreciation :isLogin="isLogin" />
  
      <Industry :isLogin="isLogin" />
  
      <Building :isLogin="isLogin" />
  
      <Business :isLogin="isLogin" /> -->
  </div>
</template>

<script>
import Banner from "./banner.vue";
import Scroll from "./scroll.vue";

//轮播图组件
//   import Header from "@/components/loginHeader";

//   import Banner from "./banner";

//   import SubTab from "./subTab";
//首页通用样式
//import "./scss/homeCommon.scss";

//import { isLogin } from "@/utils/auth";

export default {
  components: {
    //   Header,
    Banner,
    Scroll,
    //   SubTab,
    //   Approve,
    //   Appreciation,
    //   Industry,
    //   Building,
    //   Business,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}
</style>
