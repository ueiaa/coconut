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
            :default-active="$route.path"
            router
            class="header-menu"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
          >
            <el-menu-item index="/home">Home</el-menu-item>
            <el-sub-menu index="/pages">
              <template #title>pages</template>
              <el-menu-item index="/pages/animation">animation</el-menu-item>
              <el-menu-item index="/pages/webSocket">webSocket</el-menu-item>
              <el-menu-item index="/pages/pageView1">pageView1</el-menu-item>
              <el-menu-item index="/pages/pageView2">pageView2</el-menu-item>
            </el-sub-menu>
            <!-- <el-menu-item index="/echarts">echarts</el-menu-item> -->
            <el-sub-menu index="echarts">
              <template #title>echarts</template>
              <el-menu-item index="/echarts/line">line</el-menu-item>
              <el-menu-item index="/echarts/bar">bar</el-menu-item>
              <el-menu-item index="/echarts/pie">pie</el-menu-item>
              <el-menu-item index="/echarts/other">other</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/zjtx">Zjtx</el-menu-item>
            <el-sub-menu index="demo">
              <template #title>demo</template>
              <el-menu-item index="/demo/form">form</el-menu-item>
              <el-menu-item index="/demo/qrCode">qrCode</el-menu-item>
              <el-menu-item index="/demo/lodash">lodash</el-menu-item>
              <!-- <el-menu-item index="/demo/editor">editor</el-menu-item> -->
            </el-sub-menu>
            <el-menu-item index="/contact">Contact</el-menu-item>
          </el-menu>
          <div v-if="isLogin" class="header-user">
            <div><img src="../assets/user/user-img.png" alt=""></div>
            <div><el-button plain @click="handleToLogout">Logout</el-button></div>
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
  created() {
    if(localStorage.getItem('userToken') !== null) {
      this.isLogin = true
      console.log(this.$store.state.userToken)
    }
  },
  methods: {
    handleSelect(item) {
      // if (item != null && item != "") {
      //   this.$router.push(item);
      // }
    },
    handleToLogin() {
      this.$router.push('/login')
    },
    handleToLogout() {
      this.$router.push('/login')
      localStorage.removeItem('userToken')
    }
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
        display: flex;
        img {
          width: 35px;
          height: 35px;
          margin-right: 10px;
        }
      }
    }
  }
}

</style>
