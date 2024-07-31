import { createRouter, createWebHashHistory } from "vue-router";

const constRoutes = [
  {
    path: "/",
    component: () => import("@/views/ent/headerAndFooter/index"),
    hidden: true,
    redirect: "/home",
    meta: {
      name: "首页",
    },
    children: [
      {
        path: "home",
        component: () => import("@/views/ent/home/index"),
        name: "首页",
      },
      {
        path: "/zjtx",
        component: () => import("@/views/ent/zjtx/index"),
        meta: {
          id: "zjtx",
          title: "专精特新",
        },
        name: "专精特新",
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/ent/login/index"),
    meta: {
      id: "login",
      title: "登录",
    },
  },
  // {
  //   path: "/echarts-line",
  //   component: () => import("@/views/ent/echarts/echarts-line"),
  //   meta: {
  //     id: "echarts-line",
  //     title: "echarts折线图",
  //   },
  //   name: 'echarts折线图'
  // },
  // {
  //   path: "/echarts-bar",
  //   component: () => import("@/views/ent/echarts/echarts-bar"),
  //   meta: {
  //     id: "echarts-bar",
  //     title: "echarts柱状图",
  //   },
  //   name: 'echarts柱状图'
  // },
  {
    path: "/echarts",
    children: [
      {
        path: "/echarts/line",
        component: () => import("@/views/ent/echarts/echarts-line"),
        meta: {
          id: "echarts-line",
          title: "echarts折线图",
        },
        name: "echarts折线图",
      },
      {
        path: "/echarts/bar",
        component: () => import("@/views/ent/echarts/echarts-bar"),
        meta: {
          id: "echarts-bar",
          title: "echarts柱状图",
        },
        name: "echarts柱状图",
      },
    ],
  },
];

//设置静态路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes,
});

//页面埋点
let startTime = Date.now();
let currentTime;
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if (to) {
    // 页面跳转后记录当前时间currentTime
    currentTime = Date.now();
    // 计算currentTime 和 startTime的差值可以得出用户在某个页面停留的时间
    console.log(
      "用户由",
      from.name,
      "页面 跳转到",
      to.name,
      "页面，在",
      from.name,
      "页面停留了",
      parseInt((currentTime - startTime) / 1000),
      "秒"
    );
    // 埋点数据上报
    // ...
    // 每次都要初始化一下startTime
    startTime = Date.now();
  }
  next();
});

export default router;
