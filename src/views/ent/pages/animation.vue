<template>
  <div class="page">
    <div class="box">
        <div class="circle" :class="{ 'active': isPlay, 'paused': !isPlay }"></div>
    </div>
    <div class="btn" v-if="isPlay" @click="playOrPause">pause</div>
    <div class="btn" v-else @click="playOrPause">play</div>
    
  </div>
</template>
<script>
export default {
    data() {
        return {
            isPlay: false
        }
    },
    methods: {
        playOrPause() {
            this.isPlay = this.isPlay ? false : true;
        }
    }
}
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .box {
    width: 90%;
    height: 300px;
    border-radius: 20px;
    background-color: #fbf2f8;
    display: flex;
    align-items: center;
    .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #e0ecfa;
        border: 3px solid #124a8b;
    }
    .active {
        animation-name: change;
        animation-duration: 10s;
        animation-timing-function: ease;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-play-state: running;
    }
    .paused {
        animation-name: change;
        animation-duration: 10s;
        animation-timing-function: ease;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-play-state: paused;
    }
  }
  @keyframes change {
    0% {
        width: 100px;
        height: 100px;
        margin-left: 0;
    }
    100% {
        width: 300px;
        height: 300px;
        right: 0;
        margin-left: calc(100% - 300px);
    }
  }
  .btn {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: #704477;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .btn:hover {
    background: #917096;
  }
}
</style>
