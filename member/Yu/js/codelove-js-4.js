// Charts.js
// line chart
const lineChart = getNode("#lineChart");
let data_male = [
  {
    year: "2013年",
    amount: 178466,
  },
  {
    year: "2014年",
    amount: 181375,
  },
  {
    year: "2015年",
    amount: 184561,
  },
  {
    year: "2016年",
    amount: 188309,
  },
  {
    year: "2017年",
    amount: 192038,
  },
  {
    year: "2018年",
    amount: 194987,
  },
  {
    year: "2019年",
    amount: 199249,
  },
];

new Chart(lineChart, {
  type: "line",
  data: {
    datasets: [
      {
        label: "男性",
        data: data_male,
        borderWidth: 1,
      },
    ],
  },
  options: {
    parsing: {
      xAxisKey: "year",
      yAxisKey: "amount",
    },
    plugins: {
      title: {
        display: true,
        text: "高雄市年底單身戶",
        font: {
          size: 32,
        },
      },
      responsive: true,
    },
  },
});

// bar chart
let barChart = getNode("#barChart");
let data_foodPoison = [
  {
    month: "一月",
    case: 54,
  },
  {
    month: "二月",
    case: 124,
  },
  {
    month: "三月",
    case: 97,
  },
  {
    month: "四月",
    case: 36,
  },
  {
    month: "五月",
    case: 6,
  },
  {
    month: "六月",
    case: 17,
  },
  {
    month: "七月",
    case: 26,
  },
  {
    month: "八月",
    case: 31,
  },
  {
    month: "九月",
    case: 22,
  },
  {
    month: "十月",
    case: 29,
  },
  {
    month: "十一月",
    case: 17,
  },
  {
    month: "十二月",
    case: 40,
  },
];

new Chart(barChart, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "案件數",
        data: data_foodPoison,
        backgroundColor: "#e76f51",
      },
    ],
  },
  options: {
    parsing: {
      xAxisKey: "month",
      yAxisKey: "case",
    },
    plugins: {
      title: {
        display: true,
        text: "民國111年食品中毒發生狀況",
        font: {
          size: 32,
        },
      },
      responsive: true,
    },
  },
});

// pie chart
let pieChart = getNode("#pieChart");
let data_population = {
  datasets: [
    {
      data: [307333, 819547, 1093926, 516455],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["0-14歲", "15-39歲", "40-64歲", "65歲以上"],
};
const tisPie = new Chart(pieChart, {
  type: "pie",
  data: data_population,
  options: {
    plugins: {
      title: {
        display: true,
        text: "民國112年9月份高雄市年齡分組統計",
        font: {
          size: 24,
        },
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 16,
        },
      },
      responsive: true,
    },
  },
});
