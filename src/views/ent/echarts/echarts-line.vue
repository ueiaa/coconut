<template>
  <div class="echarts">
    <div class="container">
      <div class="container-left">
        <div class="base-line" ref="baseLine"></div>
      </div>
      <div class="container-right">
        <div class="stack-line" ref="stackLine"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="area-stack" ref="areaStack"></div>
      </div>
      <div class="container-right">
        <div class="temp-change" ref="tempChange"></div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <div class="area-pieces" ref="areaPieces"></div>
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
  baseLineOption,
  stackLineOption,
  areaStackOption,
  tempChangeOption,
  areaPiecesOption,
  lineGradientOption,
  largeAreaPiecesOption,
  stepLineOption
} from "./option-line.js";
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
      let myBaseLine = echarts.init(this.$refs.baseLine);
      let myStackLine = echarts.init(this.$refs.stackLine);
      let myAreaStack = echarts.init(this.$refs.areaStack);
      let myTempChange = echarts.init(this.$refs.tempChange);
      let myAreaPieces = echarts.init(this.$refs.areaPieces);
      let myLineGradient = echarts.init(this.$refs.lineGradient);
      let myLargeAreaPieces = echarts.init(this.$refs.largeAreaPieces);
      let myStepLine = echarts.init(this.$refs.stepLine);
      myBaseLine.setOption(baseLineOption);
      myStackLine.setOption(stackLineOption);
      myAreaStack.setOption(areaStackOption);
      myTempChange.setOption(tempChangeOption);
      myAreaPieces.setOption(areaPiecesOption);
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
      background-color: #f4edf2;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .base-line,
      .area-stack,
      .area-pieces,
      .large-area-pieces {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .container-right {
      background-color: #f4edf2;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .stack-line,
      .temp-change,
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
