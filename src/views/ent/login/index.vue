<template>
  <div :class="{ elder: isElder }" class="login">
    <div class="login-wrapper">
      <div class="login-left">
        <img src="@/assets/login/active-cloud.svg" alt="" />
      </div>
      <div class="login-right">
        <div class="login-box">
          <div class="login-form">
            <el-form :model="loginForm" :rules="rules" label-width="auto">
              <el-form-item class="username" prop="username">
                <el-input
                  v-model="loginForm.username"
                  placeholder="Username"
                ></el-input>
              </el-form-item>
              <el-form-item class="password" prop="password">
                <el-input
                  v-model="loginForm.password"
                  placeholder="Password"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item class="captcha">
                <el-input
                  v-model="loginForm.captcha"
                  placeholder="Captcha"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="login-btn">
            <el-button
              type="primary"
              @click="handleLogin"
              v-log="{ caption: '登录页', params: '用户点击登录按钮' }"
              >Log in</el-button
            >
            <el-button
              type="text"
              v-if="isElder"
              style="color: #658baf"
              @click="changeTheme"
              >切换普通模式</el-button
            >
            <el-button
              type="text"
              v-else
              style="color: #658baf"
              @click="changeTheme"
              >切换长辈模式</el-button
            >
          </div>
          <div class="login-other"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loginForm: {},
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: blur }],
        password: [{ required: true, message: "请输入密码", trigger: blur }],
      },
      isElder: false,
    };
  },
  created() {},
  methods: {
    changeTheme() {
      if (!this.isElder) {
        this.isElder = true;
        console.log("现在是长辈模式");
        sessionStorage.setItem("userType", "elder");
      } else {
        this.isElder = false;
        console.log("现在是普通模式");
        sessionStorage.setItem("userType", "default");
      }
    },
    handleLogin() {
      if (
        this.loginForm.username === "vv" &&
        this.loginForm.password === "111111" &&
        this.loginForm.captcha === "6666"
      ) {
        this.$router.push("/home");
        localStorage.setItem("userToken", this.loginForm.username);
        this.$store.commit('saveUserToken', this.loginForm.username)
      } else {
        this.$message({
          type: "error",
          message: "请检查用户名密码",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh;
  .login-wrapper {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    display: flex;

    .login-left {
      width: 50%;
      height: 80%;
      background-color: #fff;
      // border-radius: 10% 0 0 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      // box-shadow: -7px -8px 14px 0px #658baf;
      img {
        width: 500px;
        height: 600px;
      }
    }

    .login-right {
      width: 50%;
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-box {
        display: flex;
        flex-direction: column;
        width: 50vh;
        .login-form {
          margin-bottom: 12px;
          border-radius: 16px;
          border: 2px solid #eeeeee;
          .username,
          .password {
            margin: 0 14px;
            border-bottom: 2px solid #f3f3f3;
            height: 70px;
          }
          .captcha {
            margin: 0 14px;
            height: 70px;
          }
          .el-input {
            // --el-input-border: none;
            // --el-input-hover-border: none;
            // --el-input-focus-border: none;
            --el-input-border-color: transparent;
            --el-input-hover-border-color: transparent;
            --el-input-focus-border-color: transparent;
          }
        }
        .login-btn {
          .el-button {
            width: 100%;
            height: 45px;
          }
        }
      }
    }
  }
}

.elder {
  img {
    width: 700px !important;
    height: 800px !important;
  }
  .el-input {
    font-size: 16px !important;
  }
  :deep(.el-button > span) {
    font-size: 16px;
  }
}
</style>
