<template>
  <div class="page">
    <a @click="WebSocketTest()">运行WebSocket</a>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        WebSocketTest(){
          if("WebSocket" in window) {
            alert('您的浏览器支持WebSocket！');
            var ws = new WebSocket("ws://localhost:xxxx/echo")
            ws.onopen = function() {
              ws.send("发送数据")
              alert("数据发送中...")
            };
            ws.onmessage = function(evt) {
              var received_msg = evt.data;
              console.log(received_msg)
              alert("数据已接收...")
            }
            ws.onclose = function() {
              alert("连接已关闭...")
            }
            return;
          }
          alert("您的浏览器不支持Web Socket！")
        }
    }
}
</script>
<style lang="scss" scoped>
a{
  color: #3838e7;
  cursor: pointer;
}
</style>
