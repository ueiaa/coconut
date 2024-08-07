<template>
  <div class="echarts">
    <div class="container">
      <div class="container-left">
        <div class="base-scatter" ref="baseScatter"></div>
      </div>
      <div class="container-right">
        <div class="scatter-bubble" ref="scatterBubble"></div>
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
  baseScatterOption,
  scatterBubbleOption,
  barBgOption,
  barNegativeOption,
  barStackOption,
  barStackBorderOption,
  mixLineBarOption,
  multipleYAxisOption
} from "./option-other.js";
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
      let myBaseScatter = echarts.init(this.$refs.baseScatter);
      let myScatterBubble = echarts.init(this.$refs.scatterBubble);
      let myBarBg = echarts.init(this.$refs.barBg);
      let myBarNegative = echarts.init(this.$refs.barNegative);
      let myBarStack = echarts.init(this.$refs.barStack);
      let myBarStackBorder = echarts.init(this.$refs.barStackBorder);
      let myMixLineBar = echarts.init(this.$refs.mixLineBar);
      let myMultipleYAxis = echarts.init(this.$refs.multipleYAxis);
      myBaseScatter.setOption(baseScatterOption);
      myScatterBubble.setOption(scatterBubbleOption);
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
      background-color: #edf4ee;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .base-scatter,
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
      background-color: #edf4ee;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .scatter-bubble,
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
