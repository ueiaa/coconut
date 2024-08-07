<template>
  <div class="echarts">
    <div class="container">
      <div class="container-left">
        <div class="base-pie" ref="basePie"></div>
      </div>
      <div class="container-right">
        <div class="pie-BR" ref="pieBR"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="half-donut" ref="halfDonut"></div>
      </div>
      <div class="container-right">
        <div class="multiple-pie" ref="multiplePie"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="bar-stack" ref="barStack"></div>
      </div>
      <div class="container-right">
        <div class="bar-stack-border" ref="barStackBorder"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {
  basePieOption,
  pieBROption,
  halfDonutOption,
  multiplePieOption,
  barStackOption,
  barStackBorderOption,
  mixLineBarOption,
  multipleYAxisOption
} from "./option-pie.js";
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initCharts();
    });
  },
  methods: {
    initCharts() {
      let myBasePie = echarts.init(this.$refs.basePie);
      let myPieBR = echarts.init(this.$refs.pieBR);
      let myHalfDonut = echarts.init(this.$refs.halfDonut);
      let myMultiplePie = echarts.init(this.$refs.multiplePie);
      myBasePie.setOption(basePieOption);
      myPieBR.setOption(pieBROption);
      myHalfDonut.setOption(halfDonutOption);
      myMultiplePie.setOption(multiplePieOption);
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .container {
    width: 90%;
    height: 300px;
    display: flex;
    padding: 20px;
    gap: 30px;
    .container-left {
      background-color: #edeef4;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .base-pie,
      .half-donut,
      .bar-stack,
      .mix-line-bar {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .container-right {
      background-color: #edeef4;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .pie-BR,
      .multiple-pie,
      .bar-stack-border,
      .multiple-y-axis {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
