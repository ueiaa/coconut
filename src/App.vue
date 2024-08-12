<template>
  <el-config-provider :locale="locale"> 
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn"
export default {
  name: "App",
  components: {
    [ElConfigProvider.name]: ElConfigProvider  // 包裹组件，使得所有element-plus为中文模式
  },
  data() {
    return {
      locale: zhCn
    }
  },
  mounted() {
    //document.body.style.setProperty('--el-color-primary', '#5f1239');
  }
};
</script>

<style>
#app {
  font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  /* color: #5f1239; */
}
</style>
