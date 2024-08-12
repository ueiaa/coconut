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
      {
        path: "/echarts/pie",
        component: () => import("@/views/ent/echarts/echarts-pie"),
        meta: {
          id: "echarts-pie",
          title: "echarts饼图",
        },
        name: "echarts饼图",
      },
      {
        path: "/echarts/other",
        component: () => import("@/views/ent/echarts/echarts-other"),
        meta: {
          id: "echarts-other",
          title: "echarts其他",
        },
        name: "echarts其他",
      },
    ],
  },
  {
    path: "/pages",
    children: [
      {
        path: "/pages/animation",
        component: () => import("@/views/ent/pages/animation"),
        meta: {
          id: "animation",
          title: "动画",
        },
        name: "动画",
      },
      {
        path: "/pages/webSocket",
        component: () => import("@/views/ent/pages/webSocket"),
        meta: {
          id: "webSocket",
          title: "webSocket",
        },
        name: "webSocket",
      },
      {
        path: "/pages/pageView1",
        component: () => import("@/views/ent/pages/pageView1"),
        meta: {
          id: "pageView1",
          title: "圣杯布局",
        },
        name: "圣杯布局",
      },
      {
        path: "/pages/pageView2",
        component: () => import("@/views/ent/pages/pageView2"),
        meta: {
          id: "pageView2",
          title: "双飞翼布局",
        },
        name: "双飞翼布局",
      },
    ],
  },
  {
    path: "/demo",
    component: () => import("@/views/ent/demo/index"),
    hidden: true,
    redirect: "/form",
    meta: {
      name: "demo",
    },
    children: [
      {
        path: "/demo/form",
        component: () => import("@/views/ent/demo/form/index"),
        meta: {
          id: "form",
          title: "表单",
        },
        name: "表单",
      },
      {
        path: "/demo/qrCode",
        component: () => import("@/views/ent/demo/qrCode/index"),
        meta: {
          id: "qrCode",
          title: "二维码",
          requiresAuth: true,
        },
        name: "二维码",
      },
      {
        path: "/demo/lodash",
        component: () => import("@/views/ent/demo/lodash/index"),
        meta: {
          id: "lodash",
          title: "lodash",
        },
        name: "lodash",
      },
      
    ],
  },
];

//设置静态路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes,
});

const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null ? true : false;
}

//页面埋点
let startTime = Date.now();
let currentTime;
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
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

  // 如果路由需要认证 或者写成to.meta.requiresAuth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查用户是否已登录
    if(isAuthenticated()) {
      // 已登录，允许访问
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } 
  } else {
    next();
  }
  // next();
});

export default router;
