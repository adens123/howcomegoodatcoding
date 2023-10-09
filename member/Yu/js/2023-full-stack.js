const udemy_01 = [
  {
    chapter: "Chapter 5 - Javascript Basic",
    lesson: [
      {
        date: "2023/09/15",
        content: "JS簡介、Lexical Structure",
        link: "20230915.html",
      },
      {
        date: "2023/09/18",
        content: "變數與賦值、數字運算",
        link: "20230918.html",
      },
      {
        date: "2023/09/19",
        content:
          "String基本介紹、Number Methods、String Attributes and Methods",
        link: "20230919.html",
      },
      {
        date: "2023/09/20",
        content:
          "Boolean, Undefined, Null、logical, comparison operator, if statement",
        link: "20230920.html",
      },
      {
        date: "2023/09/21",
        content:
          "Truthy and Falsy Values, Logical Operator與其他資料類型處理, Coding Convention and Restrictions",
        link: "20230921.html",
      },
    ],
  },
  {
    chapter: "Chapter 6 - Javascript Basic 2",
    lesson: [
      {
        date: "2023/09/22",
        content: "認識函式、return關鍵字",
        link: "20230922.html",
      },
      {
        date: "2023/09/25",
        content: "Array陣列、Reference Data Type 比較、Array Methods",
        link: "20230925.html",
      },
      {
        date: "2023/09/26",
        content: "Function的時間複雜度、Object語法",
        link: "20230926.html",
      },
      {
        date: "2023/09/27",
        content: "For loop, while loop",
        link: "20230927.html",
      },
      {
        date: "2023/09/28",
        content: "Math Object、終極密碼",
        link: "20230928.html",
      },
      {
        date: "2023/09/29",
        content: "簡單練習題第一部分 1-10",
        link: "20230929.html",
      },
      {
        date: "2023/10/03",
        content: "簡單練習題第二部分 1-7",
        link: "20231003.html",
      },
    ],
  },
];

// for (let i = 0; i < udemy_01.length; i++) {
//   console.log(udemy_01[i].chapter);
// }

let el = document.querySelectorAll(".chapter");
for (let i = 0; i < udemy_01.length; i++) {
  el[i].innerHTML = udemy_01[i].chapter;
}
