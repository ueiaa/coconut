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
        <div class="bar-stack-border" ref="barStackBorder"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="mix-line-bar" ref="mixLineBar"></div>
      </div>
      <div class="container-right">
        <div class="multiple-y-axis" ref="multipleYAxis"></div>
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
  barStackBorderOption,
  mixLineBarOption,
  multipleYAxisOption
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
      let myBarStackBorder = echarts.init(this.$refs.barStackBorder);
      let myMixLineBar = echarts.init(this.$refs.mixLineBar);
      let myMultipleYAxis = echarts.init(this.$refs.multipleYAxis);
      myBaseBar.setOption(baseBarOption);
      myBarAlign.setOption(barAlignOption);
      myBarBg.setOption(barBgOption);
      myBarNegative.setOption(barNegativeOption);
      myBarStack.setOption(barStackOption);
      myBarStackBorder.setOption(barStackBorderOption);
      myMixLineBar.setOption(mixLineBarOption);
      myMultipleYAxis.setOption(multipleYAxisOption);
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
      .mix-line-bar {
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
