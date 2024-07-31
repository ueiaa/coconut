<template>
  <div class="zjtx-page">
    <div style="width: 100%">
      <img :src="imgUrl" class="banner-img" />
      <h1 style="position: absolute; left: 200px; top: 80px">
        “专精特新”梯度培育
      </h1>
    </div>
    <div class="info-box">
      <div class="left-info">
        <div class="title">
          <span style="font-weight: 700">企业信息</span>
        </div>
        <div class="title">
          <span style="font-size: 12px; color: #666">企业名称</span><br />
          <span>xxx有限公司</span>
        </div>
        <div class="title">
          <span style="font-size: 12px; color: #666">统一社会信用代码</span
          ><br />
          <span>123746924745702</span>
        </div>
        <div class="title">
          <span style="font-size: 12px; color: #666">经营地址</span><br />
          <span>拱墅区xx街道xx号</span>
        </div>
      </div>
      <div class="right-info">
        <div class="title">
          <span style="font-weight: 700">认定信息</span>
        </div>
        <div class="box">
          <div class="box-inner">
            <div class="inner-title">
              <div class="title-left">从业年限</div>
              <div class="title-icon">
                <img src="@/assets/zjtx/finish.png" alt="" />
              </div>
            </div>
            <div class="inner-content">
              <span>3年</span>
            </div>
            <div class="inner-bottom">*从事特定细分市场时间2年以上</div>
          </div>
          <div class="box-inner">
            <div class="inner-title">
              <div class="title-left">研发费用及占比</div>
              <div class="title-icon">
                <img src="@/assets/zjtx/finish.png" alt="" />
              </div>
            </div>
          </div>
          <div class="box-inner">
            <div class="inner-title">
              <div class="title-left">营业总额</div>
              <div class="title-icon">
                <img src="@/assets/zjtx/finish.png" alt="" />
              </div>
            </div>
          </div>
          <div class="box-inner">
            <div class="inner-title">
              <div class="title-left">评价得分/满足条件</div>
              <div class="title-icon">
                <img src="@/assets/zjtx/unfinish.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="tip">
          <span
            >从业年限、研发费用及占比和营业总额已达到认定标准，但评价得分未满足“专精特新”要求，建议增加企业创新度，已为您精准匹配相关政策和定制化服务</span
          >
        </div>
      </div>
    </div>

    <div class="specific-metric">
      <div class="title-bar"></div>
      <div class="title-rest">
        <div class="title">
          <span>专业化指标</span>
        </div>
        <div class="score">
          <span>综合得分：7分</span>
        </div>
      </div>
    </div>

    <div class="specific-content">
      <div class="content">
        <div class="content-left">
          <div class="left-top">
            <span>上年度主营业务收入总额占营业收入总额比重</span>
          </div>
          <div class="left-bottom">
            <span>70%-80%（3分）</span>
          </div>
        </div>
        <div class="content-right">
          <div class="myChart" ref="chart"></div>
        </div>
      </div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      imgUrl: require("../../../assets/out-door/banner.jpeg"),
      optionData: [
        { value: 25, name: "white", itemStyle: "#fff" },
        { value: 75, name: "blue", itemStyle: "#79a1d1" },
      ],
      metric1: "75%",
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
    });
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(this.$refs.chart);
      var option = {
        title: {
          text: this.metric1,
          left: "35%",
          top: "45%",
          textStyle: {
            fontSize: 14,
            color: "#79a1d1",
          },
        },
        color: ["#fff", "#79a1d1"],
        // tooltip: {
        //   trigger: "item",
        // },
        series: [
          {
            name: "percent",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            data: [
              { value: 25, name: "100人以上" },
              { value: 75, name: "50-100人" },
            ],
            label: {
              show: false,
              color: "#fff",
              // 其他标签样式配置
            },
            labelLine: {
              show: false, // 这里设置为false即可去掉指针
            },
          },
        ],
        data: this.optionData,
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.zjtx-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-bottom: 30px;
  .banner-img {
    width: 100%;
  }
  .info-box {
    width: 90%;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
    .left-info {
      width: 300px;
      height: 100%;
      background: #fff;
      box-shadow: 5px 5px 10px 5px #e8e8e8;
      display: flex;
      flex-direction: column;
      .title {
        margin: 30px 0 0 30px;
      }
    }
    .right-info {
      flex: 1;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(244, 248, 255, 1) 0%,
        rgba(198, 218, 254, 1) 100%
      );
      box-shadow: 5px 5px 10px 5px #e8e8e8;
      display: flex;
      flex-direction: column;
      .title {
        margin: 30px 0 0 30px;
      }
      .box {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        padding: 20px;
        .box-inner {
          background: #f7faff;
          width: 200px;
          height: 150px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          align-items: center;
          // .inner {
          //   padding: 20px;
          //   display: flex;
          //   flex-direction: column;
          // }
          .inner-title {
            display: flex;
            width: 100%;
            justify-content: space-between;
            color: #9ebcdf;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .inner-content {
            width: 100px;
            height: 80px;
            font-size: 28px;
            color: #79a1d1;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .inner-bottom {
            font-size: 13px;
            color: #79a1d1;
          }
        }
      }
      .tip {
        padding: 0 20px;
        font-size: 13px;
        color: #fff;
      }
    }
  }

  .specific-metric {
    width: 90%;
    height: 40px;
    background: linear-gradient(
      to right,
      rgb(198, 218, 254) 100%,
      rgb(244, 248, 255) 0%
    );
    margin-top: 20px;
    display: flex;
    align-items: center;
    .title-bar {
      width: 10px;
      height: 80%;
      background: #1869cb;
      border-radius: 10px;
      margin: 0 10px;
    }
    .title-rest {
      display: flex;
      justify-content: space-between;
      width: calc(100% - 10px);
      padding-right: 10px;
    }
  }

  .specific-content {
    height: 200px;
    width: 90%;
    display: flex;
    padding: 20px 0;
    gap: 20px;
    .content {
      height: 100%;
      background: #f5f9ff;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .content-left {
        display: flex;
        gap: 20px;
        padding: 10px;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        .left-top {
          font-size: 12px;
          color: #79a1d1;
        }
        .left-bottom {
          font-size: 12px;
          color: #79a1d1;
        }
      }
      .content-right {
        flex: 1;
        margin-left: -20px;
        .myChart {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
}
</style>
