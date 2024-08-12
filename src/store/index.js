// import { createStore } from 'vuex'

// // 动态加载modules
// // const files = require.context('./modules', true, /\.js$/)
// const modules = {}
// files.keys().forEach((key) => {
//   modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
// })
// // namespaced = true
// Object.keys(modules).forEach((key) => {
//   modules[key]['namespaced'] = true
// })

// export default createStore({
//   modules
// })

import { createStore } from "vuex"


export default createStore({
  state:{
    name:"张三",
    age:12,
    count:0,
    userToken: '',
  },
  mutations:{
    // 将当前获取的username保存
    saveUserToken(state, username) {
      state.userToken = username
    }
  }
})