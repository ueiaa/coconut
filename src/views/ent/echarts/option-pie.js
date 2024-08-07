const dataPie = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
]

export let basePieOption = {
  title: {
    left: "center",
    text: "Referer of a Website",
    subText: "Fake Data",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    left: "left",
    orient: "vertical",
  },
  series: [
    {
      name: "Access Form",
      type: "pie",
      data: dataPie,
      emphasis: {
        itemStyle: {
          shadowBlur: 10, // 图形阴影的模糊大小
          shadowOffsetX: 0, //阴影水平方向上的偏移
          shadowColor: "rgba(0,0,0,0.5)",
        },
      },
      // labelLine: {
      //   show: false
      // },
      // label: {
      //   show: false
      // }
    },
  ],
};

export let pieBROption = {
  title: {
    left: "center",
    text: "圆角环形图",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    left: "center",
    bottom: "2%",
  },
  series: [
    {
      name: "Access Form",
      type: "pie",
      data: dataPie,
      radius: ["40%", "70%"], // 内圈半径40%，外圈半径70%
      avoidLabelOverlap: false, // 是否启用防止标签重叠策略，默认开启，标签拥挤的情况下会挪动各个标签位置
      // 图形样式
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      // 图形上的文本标签
      label: {
        show: false, // 先不展示
        position: "center",
      },
      emphasis: {
        label: {
          show: true, // 移入时展示标签
          fontSize: 26,
          fontWeight: 600,
        },
      },
    },
  ],
};

export let halfDonutOption = {
  title: {
    left: 'center',
    text: '半环形图'
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    x: 'center',
    y: 'bottom'
  },
  series: {
    name: 'access form',
    type: 'pie',
    data: dataPie,
    radius: ['50%', '90%'],
    center: ['50%', '70%'], // 饼图的中心（圆心）坐标，第一项是横坐标，第二项是纵坐标
    startAngle: 180, // 起始角度，范围[0,360]
    endAngle: 360, // 结束角度，当值为'auto'时，根据startAngle自动计算结束角度，以保证是一个完整的圆
    label: {
      position: 'inside',
      formatter: '{d}%'
    }
  }
}

export let multiplePieOption = {
  title: {
    left: 'center',
    text: '分割数据到数个饼图'
  },
  dataset: [
    {
      source: [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Cereal', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Dumpling', 341, 25, 2011],
        ['Biscuit', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Cereal', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Dumpling', 241, 27, 2012],
        ['Biscuit', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Cereal', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Dumpling', 281, 31, 2013],
        ['Biscuit', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Cereal', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Dumpling', 211, 35, 2014],
        ['Biscuit', 72, 24, 2014]
      ]
    },
    {
      transform: {
        type: 'filter',  // 遍历并筛选出满足条件的数据项
        config: { dimension: 'Year', value: 2011 } // 指定筛选条件，例如选出维度(dimension)'Year'中值为2011的所有
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2012 }
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2013 }
      }
    }
  ],
  series: [
    {
      type: 'pie',
      radius: 50,
      center: ['20%', '50%'],
      datasetIndex:1
    },
    {
      type: 'pie',
      radius: 50,
      center: ['50%', '50%'],
      datasetIndex:2
    },
    {
      type: 'pie',
      radius: 50,
      center: ['80%', '50%'],
      datasetIndex:3
    },
  ]
}
