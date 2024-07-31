import * as echarts from "echarts";

let seriesData = [
  {
    name: "Email",
    type: "line",
    // stack: 'Total' //series中的每一个都设置了同样的stack值，则后一个的数据会在前一个的基础上叠加显示
    data: [120, 132, 101, 134, 90, 230, 210],
  },
  {
    name: "Union Ads",
    type: "line",
    // stack: 'Total',
    data: [220, 182, 191, 234, 290, 330, 310],
  },
  {
    name: "Video Ads",
    type: "line",
    // stack: 'Total',
    data: [150, 232, 201, 154, 190, 330, 410],
  },
  {
    name: "Direct",
    type: "line",
    //  stack: 'Total',
    data: [320, 332, 301, 334, 390, 330, 320],
  },
  {
    name: "Search Engine",
    type: "line",
    // stack: 'Total',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
  },
];

export let baseLineOption = {
  title: {
    text: "基础折线图",
  },
  xAxis: {
    type: "category",
    // boundaryGap: false, //控制折线图上的点与x轴的中心对齐还是与边界对齐，true则对准中心，false则对准边界
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
      // areaStyle:{},  // 开启折线下阴影
      // smooth: true,  // 折线平滑
    },
  ],
};

export let stackLineOption = {
  // 设置图表标题
  title: {
    text: "折线图堆叠",
  },
  // 设置鼠标移入时的tip显示
  tooltip: {
    trigger: "axis", //鼠标移入图就显示（当前轴上所有点的信息）
    // trigger: 'item', // 鼠标移入折线上的点时显示（当前点的信息）
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  xAxis: {
    type: "category",
    boundaryGap: false, //控制折线图上的点与x轴的中心对齐还是与边界对齐，true则对准中心，false则对准边界
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: seriesData,
};

export let areaStackOption = {
  title: {
    text: "堆叠面积图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    x: "center",
    y: "bottom",
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: seriesData.map((item) => {
    // 直接改变会使原数组也发生改变
    // item.stack = "Total";
    // item.emphasis = { focus: "series" };
    // item.areaStyle = {};

    // 下面这种方法不改变原数组
    let obj = {
      ...item,
      stack: "Total",
      emphasis: { focus: "series" },
      areaStyle: {},
    };
    return obj;
  }),
};

export let tempChangeOption = {
  title: {
    text: "未来一周气温变化图",
  },
  tooltip: {
    trigger: "axis",
  },
  toolbox: {
    show: true, // 是否显示工具栏
    feature: {
      dataView: { readOnly: false }, // 数据视图
      magicType: { type: ["line", "bar"] }, //切换图类型
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} °C", //数据格式化
    },
  },
  series: [
    {
      name: "Highest",
      type: "line",
      data: [10, 11, 13, 11, 12, 12, 9],
      //标记点
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
        ],
      },
      //标记线
      markLine: {
        data: [{ type: "average", name: "Avg" }],
      },
    },
    {
      name: "Lowest",
      type: "line",
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        data: [
          { type: "average", name: "Avg" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max",
            },
            {
              symbol: "circle",
              label: {
                position: "start",
                formatter: "Max",
              },
              type: "max",
              name: "最高点",
            },
          ],
        ],
      },
    },
  ],
};

export let areaPiecesOption = {
  title: {
    text: "折线图区域高亮",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
  },
  visualMap: {
    type: "piecewise",
    show: false,
    dimension: 0,
    seriesIndex: 0,
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: "rgba(0, 0, 180, 0.4)",
      },
      {
        gt: 5,
        lt: 7,
        color: "rgba(0, 0, 180, 0.4)",
      },
    ],
  },
  series: [
    {
      type: "line",
      smooth: 0.6,
      symbol: "none",
      lineStyle: {
        color: "#5470C6",
        width: 5,
      },
      markLine: {
        symbol: ["none", "none"],
        label: { show: false },
        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
      },
      areaStyle: {},
      data: [
        ["2019-10-10", 200],
        ["2019-10-11", 560],
        ["2019-10-12", 750],
        ["2019-10-13", 580],
        ["2019-10-14", 250],
        ["2019-10-15", 300],
        ["2019-10-16", 450],
        ["2019-10-17", 300],
        ["2019-10-18", 100],
      ],
    },
  ],
};

const data = [
  ["2000-06-05", 116],
  ["2000-06-06", 129],
  ["2000-06-07", 135],
  ["2000-06-08", 86],
  ["2000-06-09", 73],
  ["2000-06-10", 85],
  ["2000-06-11", 73],
  ["2000-06-12", 68],
  ["2000-06-13", 92],
  ["2000-06-14", 130],
  ["2000-06-15", 245],
  ["2000-06-16", 139],
  ["2000-06-17", 115],
  ["2000-06-18", 111],
  ["2000-06-19", 309],
  ["2000-06-20", 206],
  ["2000-06-21", 137],
  ["2000-06-22", 128],
  ["2000-06-23", 85],
  ["2000-06-24", 94],
  ["2000-06-25", 71],
  ["2000-06-26", 106],
  ["2000-06-27", 84],
  ["2000-06-28", 93],
  ["2000-06-29", 85],
  ["2000-06-30", 73],
  ["2000-07-01", 83],
  ["2000-07-02", 125],
  ["2000-07-03", 107],
  ["2000-07-04", 82],
  ["2000-07-05", 44],
  ["2000-07-06", 72],
  ["2000-07-07", 106],
  ["2000-07-08", 107],
  ["2000-07-09", 66],
  ["2000-07-10", 91],
  ["2000-07-11", 92],
  ["2000-07-12", 113],
  ["2000-07-13", 107],
  ["2000-07-14", 131],
  ["2000-07-15", 111],
  ["2000-07-16", 64],
  ["2000-07-17", 69],
  ["2000-07-18", 88],
  ["2000-07-19", 77],
  ["2000-07-20", 83],
  ["2000-07-21", 111],
  ["2000-07-22", 57],
  ["2000-07-23", 55],
  ["2000-07-24", 60],
];
const dateList = data.map((item) => {
  return item[0];
});
const valueList = data.map((item) => {
  return item[1];
});

export let lineGradientOption = {
  title: [
    {
      left: "center",
      text: "Gradient along the y axis",
    },
    {
      top: "50%",
      left: "center",
      text: "Gradient along the x axis",
    },
  ],
  visualMap: [
    {
      show: false,
      type: "continuous",
      seriesIndex: 0,
      min: 0,
      max: 400,
    },
    {
      show: false,
      type: "continuous",
      seriesIndex: 1,
      dimension: 0,
      min: 0,
      max: dateList.length - 1,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  xAxis: [
    {
      data: dateList,
    },
    {
      data: dateList,
      gridIndex: 1, // 当grid（直角坐标系）有多个时，使用该配置项表明当前y轴对应的是哪个grid组件
    },
  ],
  yAxis: [
    {
      interval: 100,
    },
    {
      gridIndex: 1, // 当grid（直角坐标系）有多个时，使用该配置项表明当前x轴对应的是哪个grid组件
      interval: 100,
    },
  ],
  grid: [
    {
      bottom: "60%", // 第一个坐标系的位置为距离底部60%
    },
    {
      top: "60%", //第二个坐标系的位置为距离顶部60%
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      data: valueList,
    },
    {
      type: "line",
      showSymbol: false,
      data: valueList,
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
  ],
};

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];
let curData = [Math.random() * 300]; //Math.random()返回一个[0,1)范围内的数

for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay)); // 每次循环加一天
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  curData.push(Math.round((Math.random() - 0.5) * 20 + curData[i - 1]));
  // Math.round()返回给定数值四舍五入到最接近的整数
}

export let largeAreaPiecesOption = {
  title: {
    text: "大数据量面积图",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    //提示框浮层的位置
    position: function (point) {
      return [point[0], "10%"]; // 固定在顶部
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0.1, "80%"], // 表示数据最小值和最大值的延伸范围
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none", // 指定哪些y轴被控制
      },
    },
    saveAsImage: {},
  },
  // 数据区域缩放组件
  dataZoom: [
    {
      type: "inside", // 内置型
      start: 0, // 数据窗口范围的起始百分比
      end: 10, // 数据窗口范围的结束百分比
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      name: 'Data',
      type: 'line',
      symbol: 'none',  // 标记的图形，没有可设置为none
      // 折线图数据量远大于像素点时候的降采样策略，开启后可以有效优化图表的绘制效率，默认关闭
      sampling: 'lttb',  // 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值
      itemStyle: { // 折线拐点标志的样式
        color: 'rgb(255, 70, 131)'
      },
      // 区域填充样式。设置后显示成区域面积图
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 158, 68)'
          },
          {
            offset: 1,
            color: 'rgb(255, 70, 131)'
          }
        ])
      },
      data: curData
    }
  ]
};

export let stepLineOption = {
  title: {
    // left: 'center',
    text: '阶梯折线图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Step Start', 'Step Middle', 'Step End']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510]
    }
  ]
}
