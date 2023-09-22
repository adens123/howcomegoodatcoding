// 課程資料
const assignments = [
  {
    date: "2023/09/15",
    chapter: "JS簡介、Lexical Structure",
    link: "20230915.html",
  },
  {
    date: "2023/09/18",
    chapter: "變數與賦值、數字運算",
    link: "20230918.html",
  },
  {
    date: "2023/09/19",
    chapter: "String基本介紹、Number Methods、String Attributes and Methods",
    link: "20230919.html",
  },
  {
    date: "2023/09/20",
    chapter:
      "Boolean, Undefined, Null、logical, comparison operator, if statement",
    link: "20230920.html",
  },
  {
    date: "2023/09/21",
    chapter:
      "Truthy and Falsy Values, Logical Operator與其他資料類型處理, Coding Convention and Restrictions",
    link: "20230921.html",
  },
  {
    date: "2023/09/22",
    chapter: "認識函式、return關鍵字",
    link: "20230922.html",
  },
];

// 加入表格內容
let el = document.querySelector("tbody");

let str = "";

for (let i = 0; i < assignments.length; i++) {
  str += `<tr>
  <th scope="row">${i + 1}</th>
  <td>${assignments[i].date}</td>
  <td>${assignments[i].chapter}</td>
  <td><a class="btn btn-outline-secondary text-nowrap" href="./2023-full-stack/${
    assignments[i].link
  }">點此前往</a></td>
</tr>`;
}

el.innerHTML = str;
