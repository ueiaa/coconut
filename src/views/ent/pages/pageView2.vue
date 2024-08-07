<template>
  <div class="wrap">
    <div class="header">header</div>
    <div class="content">
      <div class="mid">
        <div class="center" @click="showSymbol()">center</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
      showSymbol() {
        let statuses = {    
          OPEN: Symbol('已下单'),    
          IN_PROGRESS: Symbol('配送中'),    
          COMPLETED: Symbol('订单完成'),    
          CANCELED: Symbol('订单取消') 
        }; 
        let status = Symbol('status');

        let task = {
            [status]: statuses.OPEN,
            description: '学习 ES6 Symbol'
        };

        console.log(task);
        // {
        //   description: '学习 ES6 Symbol',
        //   Symbol(status): Symbol(已下单)
        // }
        console.log(Object.getOwnPropertySymbols(task))
        //[Symbol(Status)]
      }
    }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  min-width: 600px;
}

.header, .footer {
  width: 100%;
  height: 100px;
  background: #666;
}

.mid, .left, .right {
  float: left;
}

.content {
  overflow: hidden;
  padding: 0 200px;
}

.left, .right {
  width: 200px;
  height: 200px;
  background: #f8dcf3;
}

.left {
  margin-left: -100%;
}
.right {
  margin-left: -200px;
}

.mid {
  width: 100%;
  height: 200px;
  background: #dcf8e6;
  .center {
    margin: 0 200px;
  }
}
</style>
