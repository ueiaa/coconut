<template>
  <div class="home-banner">
    <div class="banner-container">
      <div class="banner-left">
        <div class="banner-left-top">
          <h1>Secure Everything You Build and Run in the Cloud</h1>
        </div>
        <div class="banner-left-center">
          <p>
            Use the Wiz Cloud Security Platform to build faster in the cloud,
            enabling security, dev and devops to work together in a self-service
            model built for the scale and speed of your cloud development.
          </p>
        </div>
        <div class="banner-left-bottom">
          <el-button type="primary">Get Started</el-button>
        </div>
      </div>
      <div class="banner-right">
        <img src="@/assets/home-page/suprise-cloud.svg" alt="" />
      </div>
    </div>
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
.home-banner {
  width: 100%;
  height: calc(100vh); //当前视窗高度的100%
  .banner-container {
    padding: 4rem 6rem 0 6rem;
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    .banner-left {
      display: flex;
      flex-direction: column;

      .banner-left-top {
        line-height: 4.7rem;
        font-size: 1.75rem;
      }

      .banner-left-center {
        color: #717783;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.75rem;
        padding-right: 1.5rem;
      }

      .banner-left-bottom {
        border-radius: 1.7rem;
      }
    }
    .banner-right {
      img {
        width: 700px;
        height: 500px;
        margin-left: -5rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
