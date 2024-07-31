// 导入axios
import axios from "axios";

// 使用element-ui Message做消息提醒
import { ElMessage } from "element-plus";

// 引入自定义方法
import { getToken } from "@/utils/auth";
import { es } from "element-plus/es/locale";
import { Message } from "@element-plus/icons-vue/dist/types";
// 1.创建新的axios实例
const service = axios.create({
  //为了适应多个后台或者开发的时候api地址和发布时api地址不一样的情况
  baseURL: process.env.BASE_API,
  //超时时间，这里设置了3s
  timeout: 3 * 1000,
});

// 2.请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发送请求前做的一些处理，数据转化，配置请求头，设置token，设置loading等

    // 序列化，下面两种使用一种
    /* 当需要发送复杂对象的POST请求，并且后端服务或API要求使用application/x-www-form-urlencoded格式接收数据时
       建议进行序列化，其他情况下可以直接发送数据或根据需要进行适当处理 */
    // config.data = JSON.stringify(config.data)
    // config.data = qs.stringify(config.data)

    // 配置请求头
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // 设置token，可以引入cookie方法或者用本地的localStorage方法，推荐js-cookie
    // 这里使用的是util/auth.js中封装好的getToken()方法，本质也是使用了cookie
    const token = getToken();
    if (token) {
      //   config.headers["X-Token"] = token;
      //   config.params = { "X-Token": token }; // 如果要求携带在参数中
      config.headers.token = token; // 如果要求携带在请求中
      // 以上设置token的方法依实际情况而定
    }

    return config;
  },
  (error) => {
    console.log(error); //for debug
    return Promise.reject(error);
  }
);

// 3.响应拦截器
service.interceptors.response.use(
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: "/login",
          });
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          ElMessage.error("登录过期，请重新登录");
          localStorage.removeItem("token");
          setTimeout(() => {
            router.replace({
              path: "/login",
            });
          }, 1000);
          break;
        
        case 404:
          ElMessage.error('请求不存在')
          setTimeout(() => {
            router.replace({
              path: "/404",
            });
          }, 1000);
          break;
        
        default:
          ElMessage({
            message: error.response.data.message
          })
      }

      return Promise.reject(error.response)
    }
  }
);

export default service;