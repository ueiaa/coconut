<template>
  <div class="wrap">
    <div class="header">header</div>
    <div class="content">
      <div class="center">center</div>
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

.center, .left, .right {
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
  position: relative;
  left: -200px;
}
.right {
  margin-left: -200px;
  position: relative;
  left: 200px;
}

.center {
  width: 100%;
  height: 200px;
  background: #dcf8e6;
}
</style>
