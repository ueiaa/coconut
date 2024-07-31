<template>
  <div class="home-header" :style="style">
    <div class="header-wrapper">
      <div class="header-container">
        <!-- <div class="header-block"></div> -->
        <div class="header-logo login-logo">
          <img src="../assets/coconut-logo.png" alt="" />
        </div>

        <div class="header-content">
          <el-menu
            :default-active="activeIndex"
            class="header-menu"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
          >
            <el-menu-item index="/home">Home</el-menu-item>
            <el-menu-item index="/pages">Pages</el-menu-item>
            <!-- <el-menu-item index="/echarts">echarts</el-menu-item> -->
            <el-sub-menu index="echarts">
              <template #title>echarts</template>
              <el-menu-item index="/echarts/line">line</el-menu-item>
              <el-menu-item index="/echarts/bar">bar</el-menu-item>
              <el-menu-item index="/echarts">Zjtx</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/zjtx">Zjtx</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
            <el-menu-item index="/contact">Contact</el-menu-item>
          </el-menu>
          <div v-if="isLogin" class="header-user">
            <img src="../assets/user/user-img.png" alt="">
          </div>
          <div v-else class="header-btn">
            <el-button plain @click="handleToLogin">SignUp</el-button>
            <el-button type="primary" class="primary" @click="handleToLogin">SignIn</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/styles/entHome.scss";
export default {
  props: {},
  components: {},
  data() {
    return {
      activeIndex: "1",
      isLogin: false,
    };
  },
  computed: {
    style() {
      return {};
    },
  },
  created() {},
  methods: {
    handleSelect(item) {
      if (item != null && item != "") {
        this.$router.push(item);
      }
    },
    handleToLogin() {
      this.$router.push('/login')
    },
  },
};
</script>
<style lang="scss" scoped>
.home-header {
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
  .header-wrapper {
    padding: 0 12px;
  }
  .header-container {
    display: flex;
    justify-content: space-between; //两端对齐（两边与边框没有距离）
    align-items: center;
    margin: 0 auto;

    .header-logo {
      img {
        width: 50px;
        height: 50px;
      }
    }

    .header-content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;

      .header-menu {
        padding-right: 20px;
        border-bottom: 0px;
      }

      .header-user {
        img {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
}

</style>
