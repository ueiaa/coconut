<template>
  <div class="echarts">
    <div class="container">
      <div class="container-left">
        <div class="base-bar" ref="baseBar"></div>
      </div>
      <div class="container-right">
        <div class="bar-align" ref="barAlign"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="bar-bg" ref="barBg"></div>
      </div>
      <div class="container-right">
        <div class="bar-negative" ref="barNegative"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="bar-stack" ref="barStack"></div>
      </div>
      <div class="container-right">
        <div class="line-gradient" ref="lineGradient"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="large-area-pieces" ref="largeAreaPieces"></div>
      </div>
      <div class="container-right">
        <div class="step-line" ref="stepLine"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {
  baseBarOption,
  barAlignOption,
  barBgOption,
  barNegativeOption,
  barStackOption,
  lineGradientOption,
  largeAreaPiecesOption,
  stepLineOption
} from "./option-bar.js";
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
      let myBaseBar = echarts.init(this.$refs.baseBar);
      let myBarAlign = echarts.init(this.$refs.barAlign);
      let myBarBg = echarts.init(this.$refs.barBg);
      let myBarNegative = echarts.init(this.$refs.barNegative);
      let myBarStack = echarts.init(this.$refs.barStack);
      let myLineGradient = echarts.init(this.$refs.lineGradient);
      let myLargeAreaPieces = echarts.init(this.$refs.largeAreaPieces);
      let myStepLine = echarts.init(this.$refs.stepLine);
      myBaseBar.setOption(baseBarOption);
      myBarAlign.setOption(barAlignOption);
      myBarBg.setOption(barBgOption);
      myBarNegative.setOption(barNegativeOption);
      myBarStack.setOption(barStackOption);
      myLineGradient.setOption(lineGradientOption);
      myLargeAreaPieces.setOption(largeAreaPiecesOption);
      myStepLine.setOption(stepLineOption);
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
      background-color: #f0edf4;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .base-bar,
      .bar-bg,
      .bar-stack,
      .large-area-pieces {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .container-right {
      background-color: #f0edf4;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .bar-align,
      .bar-negative,
      .line-gradient,
      .step-line {
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
