const ASSIGNMENTS = [
  [
    {
      title: "作業成果",
      date: "2023/09/27",
      chapter: "愛寫扣學院-幫衣服工廠做個好用表單",
      link: "./codeLove/clothFactory.html",
    },
  ],
  [
    {
      title: "2023 網頁全端開發",
      date: "2023/09/15",
      chapter: "JS簡介、Lexical Structure",
      link: "20230915.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/18",
      chapter: "變數與賦值、數字運算",
      link: "20230918.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/19",
      chapter: "String基本介紹、Number Methods、String Attributes and Methods",
      link: "20230919.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/20",
      chapter:
        "Boolean, Undefined, Null、logical, comparison operator, if statement",
      link: "20230920.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/21",
      chapter:
        "Truthy and Falsy Values, Logical Operator與其他資料類型處理, Coding Convention and Restrictions",
      link: "20230921.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/22",
      chapter: "認識函式、return關鍵字",
      link: "20230922.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/25",
      chapter: "Array陣列、Reference Data Type 比較、Array Methods",
      link: "20230925.html",
    },
    {
      title: "2023 網頁全端開發",
      date: "2023/09/26",
      chapter: "Function的時間複雜度、Object語法",
      link: "20230926.html",
    },
  ],
  [
    {
      title: "前端練功作業包",
      date: "2023/09/22",
      chapter: "基本的函數操作、onclick 事件",
      link: "https://jsfiddle.net/kulimusoda/mk2ptwc5/26/",
    },
    {
      title: "前端練功作業包",
      date: "2023/09/25",
      chapter: "基本的變數操作、從 html 取得內容",
      link: "https://jsfiddle.net/kulimusoda/cuh8wyrL/104/",
    },
    {
      title: "前端練功作業包",
      date: "2023/09/27",
      chapter: "修改 html 的內容",
      link: "https://jsfiddle.net/kulimusoda/wuLntymf/23/",
    },
  ],
];

// console.log(ASSIGNMENTS[1][0].title);

let el = document.querySelectorAll("tbody");
let str_01 = "";

// 選擇課程
for (let i = 0; i < ASSIGNMENTS.length; i++) {
  // 章節內容
  for (let j = 0; j < ASSIGNMENTS[i].length; j++) {
    if (ASSIGNMENTS[i][0].title == "2023 網頁全端開發") {
      str_01 += `<tr>
            <th scope="row">${j + 1}</th>
            <td>${ASSIGNMENTS[i][j].date}</td>
            <td>${ASSIGNMENTS[i][j].chapter}</td>
            <td><a class="btn btn-outline-secondary text-nowrap" href="./2023-full-stack/${
              ASSIGNMENTS[i][j].link
            }">點此前往</a></td>
          </tr>`;
    } else if (ASSIGNMENTS[i][0].title == "前端練功作業包") {
      str_01 += `<tr>
        <th scope="row">第${j + 1}課</th>
        <td>${ASSIGNMENTS[i][j].date}</td>
        <td>${ASSIGNMENTS[i][j].chapter}</td>
        <td><a class="btn btn-outline-secondary text-nowrap" href="${
          ASSIGNMENTS[i][j].link
        }" target="_blank">點此前往</a></td>
      </tr>`;
    } else {
      str_01 += `<tr>
      <th scope="row">${j + 1}</th>
      <td>${ASSIGNMENTS[i][j].date}</td>
      <td>${ASSIGNMENTS[i][j].chapter}</td>
      <td><a class="btn btn-outline-secondary text-nowrap" href="${
        ASSIGNMENTS[i][j].link
      }">點此前往</a></td>
    </tr>`;
    }
  }
  // 加入html
  el[i].innerHTML = str_01;
  str_01 = "";
}
