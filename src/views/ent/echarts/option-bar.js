import { da } from "element-plus/es/locale";

export let baseBarOption = {
  title: {
    text: "基础柱状图",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

export let barAlignOption = {
  title: {
    text: "坐标轴刻度与标签对齐柱状图",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

export let barBgOption = {
  title: {
    text: "带背景色的柱状图",
    left: "center",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: "#a47ed5",
          },
        },
        150,
        80,
        70,
        110,
        130,
      ],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

const labelRight = {
  position: "right",
};

export let barNegativeOption = {
  title: {
    left: "center",
    text: "交错正负轴标签",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: 80,
    bottom: 20,
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLine: { show: false }, // 坐标轴轴线相关设置
    axisLabel: { show: false }, // 坐标轴刻度标签的相关设置
    axisTick: { show: false }, // 坐标轴刻度相关设置
    splitLine: { show: false }, // 坐标轴在grid区域中的分隔线
    data: [
      "ten",
      "nine",
      "eight",
      "seven",
      "six",
      "five",
      "four",
      "three",
      "two",
      "one",
    ],
  },
  series: [
    {
      type: "bar",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: [
        { value: -0.07, label: labelRight },
        { value: -0.09, label: labelRight },
        0.2,
        0.44,
        { value: -0.23, label: labelRight },
        0.08,
        { value: -0.17, label: labelRight },
        0.47,
        { value: -0.36, label: labelRight },
        0.18,
      ],
    },
  ],
};

export let barStackOption = {
  title: {
    left: "center",
    text: "堆叠柱状图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: "shadow",
  },
  legend: {
    x: "center",
    y: "bottom",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "15%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Search Engine",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "Baidu",
      type: "bar",
      barWidth: 5,
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "average" }, { type: "max" }]],
      },
    },
    {
      name: "Google",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "Bing",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "Others",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};

let seriesData = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "bar",
    stack: "a",
    name: "a",
    emphasis: {
      focus: "series",
    },
  },
  {
    data: [10, 46, 64, "-", 0, "-", 0],
    type: "bar",
    stack: "a",
    name: "b",
    emphasis: {
      focus: "series",
    },
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "a",
    name: "c",
    emphasis: {
      focus: "series",
    },
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "b",
    name: "d",
    emphasis: {
      focus: "series",
    },
  },
  {
    data: [10, 20, 150, 0, "-", 50, 10],
    type: "bar",
    stack: "b",
    name: "e",
    emphasis: {
      focus: "series",
    },
  },
];

let stackInfo = {}; // 初始化一个对象
// obj = {
//   'a': {

//   },
//   'b': {

//   }
// }

for (let i = 0; i < seriesData[0].data.length; i++) {
  //0-6
  for (let j = 0; j < seriesData.length; j++) {
    //0-4
    const stackName = seriesData[j].stack; //stackName='a'
    if (!stackName) {
      continue; //如果series中的某组数据没有stack，则直接跳出此次循环，进入下一次
    }
    if (!stackInfo[stackName]) {
      //如果当前stackName不存在，例如'a'
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: [],
      };
    }
    const info = stackInfo[stackName];
    const data = seriesData[j].data[i]; // 例如第一组数据中的data的第一个值，即120
    if (data && data !== "-") {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j; // stackStart: [0]
      }
      info.stackEnd[i] = j; // stackEnd: [0]，每次j循环都会改变，在当前i循环中，如果最后一次j循环的data满足条件，那么stackEnd是最后一个j的值，也就是2
    }
  }
}

// console.log(stackInfo)
// stackInfo = {
//   'a':{
//     stackStart: [0,0,0,0,0,0,0],
//     stackEnd: [2,1,1,2,2,0,0]
//   },
//   'b':{
//     stackStart:[3,4,4,3,3,4,4],
//     stackEnd:[4,4,4,3,3,4,4]
//   }
// }

// 再次遍历seriesData，i为0-4
for (let i = 0; i < seriesData.length; i++) {
  const data = seriesData[i].data; // 直接第i组数据获取对应的data
  const info = stackInfo[seriesData[i].stack]; // 第i组数据获取对应的stack，例如第0组数据是'a'
  // 遍历第i组数据的data，j为0-6
  for (let j = 0; j < seriesData[i].data.length; j++) {
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    // 修改data中的第j项，设置圆角样式
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
      },
    };
  }
}
export let barStackBorderOption = {
  title: {
    left: "center",
    text: "带圆角的堆积柱状图",
  },
  legend: {
    x: "center",
    y: "bottom",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: seriesData,
};

export let mixLineBarOption = {
  title: {
    left: "center",
    text: "折柱混合图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    y: "bottom",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisPointer: {
      type: "shadow",
    },
  },
  yAxis: [
    {
      type: "value",
      name: "Precipitation",
      min: 0,
      max: 250,
      interval: 50, // 间隔
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "Temperature",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value} °C",
      },
    },
  ],
  series: [
    {
      name: "Evaporation",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
    },
    {
      name: "Precipitation",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: "Temperature",
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + " °C";
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
};


const colors = ['#5470C6', '#91CC75', '#EE6666'];
export let multipleYAxisOption = {
  title: {
    left: "center",
    text: "多y轴",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    y: "bottom",
  },
  xAxis: {
    type: "category",
    axisTick: {
      alignWithLabel: true,
    },
    // prettier-ignore
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yAxis: [
    {
      type: 'value',
      name: 'Evaporation',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: 'Precipitation',
      position: 'right',
      alignTicks: true,
      offset: 80,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      yAxisIndex: 1,
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 2,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};
