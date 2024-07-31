<template>
    <div class="home">
      <Header :showShadow="false" :isLogin="isLogin"/>
      <router-view :key="key"></router-view>
      <EntFooter v-if="isShowFooter"/>
    </div>
  </template>
  <script>
  
  import Header from "@/components/loginHeader";
  import EntFooter from "@/components/entFooter";
  //import { isLogin } from "@/utils/auth";
  
  export default {
    name: 'index',
    components: {
      Header,
      EntFooter
    },
    data() {
      return {
        key:this.$route.path,
        isShowHeader:false,
        isShowFooter:true,
        //isLogin: isLogin(),
      }
    },
    computed: {
  
    },
    watch:{
      // $route(to , from){
      //   this.handleShow(to.path);
      // }
    },
    mounted(){
      
    },
    created(){
      // let path = this.$route.path;
      // this.handleShow(path);
    },
    methods: {
      // handleShow(val){
      //   if(val.indexOf('home') != -1){
      //     this.isShowHeader = true;
      //   }else{
      //     this.isShowHeader = false;
      //   }
      // }
    },
  };
  </script>
  <style lang="scss" scoped>
  // .home{
  //   position: relative;
  // }
  </style>
  