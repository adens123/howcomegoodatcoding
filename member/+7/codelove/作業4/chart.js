const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("myChart2");
const ctx3 = document.getElementById("myChart3");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "住客總人數",
      "華僑",
      "亞洲",
      "亞洲本國",
      "亞洲日本",
      "亞洲大陸",
      "亞洲其他",
      "歐洲",
      "澳洲紐西蘭",
      "北美",
      "其他地區",
    ],
    datasets: [
      {
        label: "# 人數",
        data: [1637072, 8219, 1522588, 958826, 194960, 224719, 144083, 35884, 7189, 34864, 28328], //數量
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [
      "檢查人數合計",
      "檢查人數男性",
      "檢查人數女性",
      "視力不良人數合計",
      "視力不良人數男性",
      "視力不良人數女性",
    ],
    datasets: [
      {
        label: "# 人數",
        data: [128268, 66372, 61896, 57376, 29084, 28292],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx3, {
  type: "line",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "# 入園人次",
        data: [
          "0",
          "237",
          "213",
          "162",
          "202",
          "1494",
          "2049",
          "0",
          "314",
          "2431",
          "246",
          "321",
          "1590",
          "2009",
          "0",
          "260",
          "222",
          "232",
          "268",
          "1437",
          "2017",
          "0",
          "303",
          "284",
          "172",
          "253",
          "1366",
          "2053",
          "0",
          "280",
          "107",
        ],
        borderWidth: 1,
        backgroundColor: ["rgba(255, 159, 64, 1)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
