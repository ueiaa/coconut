import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

// elementUI
import ELementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./styles/element/element-ui-reset.scss";
import * as icons from "@element-plus/icons-vue";

// //埋点track-js
// import TrackDirective from 'vue-trackjs'
// import { options } from '../track.config.js'

// 创建vue实例
const app = createApp(App);

app.use(ELementPlus).use(router).mount("#app");
// createApp(App).mount("#app");

// 统一注册el-icon图标
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key]);
});

//自定义指令，用于点击事件的埋点
app.directive("log", (el, binding) => {
  el.addEventListener(
    "click", () => {
      console.log("点击埋点请求......");
      console.log('埋点事件所在页面：',binding.value.caption);
      console.log('埋点事件：',binding.value.params)
    },
    false
  );
});
