const udemy_01 = [
  {
    ch_num: 5,
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
    ch_num: 6,
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

// 建立章節列表
function createChapter(course) {
  let el = document.querySelector("#accordionCourse");
  let result = "";

  for (let [index, value] of course.entries()) {
    if (index == 0) {
      result += `<div class="accordion-item">
  <h3 class="accordion-header">
    <button
      class="accordion-button chapter"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseCh${value.ch_num}"
      aria-expanded="true"
      aria-controls="collapseCh${value.ch_num}"
    >${value.chapter}</button>
  </h3>
  <div
    id="collapseCh${value.ch_num}"
    class="accordion-collapse collapse show"
    data-bs-parent="#accordionCourse"
  >
    <div class="accordion-body">
    <table
    class="table table-hover text-center align-middle"
  >
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">日期</th>
        <th scope="col">內容</th>
        <th scope="col">連結</th>
      </tr>
    </thead>
    <tbody class="course_table">
    </tbody>
  </table>
    </div>
  </div>
</div>`;
    } else {
      result += `<div class="accordion-item">
  <h3 class="accordion-header">
    <button
      class="accordion-button collapsed chapter"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseCh${value.ch_num}"
      aria-expanded="true"
      aria-controls="collapseCh${value.ch_num}"
    >${value.chapter}</button>
  </h3>
  <div
    id="collapseCh${value.ch_num}"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionCourse"
  >
    <div class="accordion-body"><table
    class="table table-hover text-center align-middle"
  >
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">日期</th>
        <th scope="col">內容</th>
        <th scope="col">連結</th>
      </tr>
    </thead>
    <tbody class="course_table">
    </tbody>
  </table></div>
  </div>
</div>`;
    }
  }
  el.innerHTML = result;
}

// 建立課程列表
function createTable(course) {
  let el = document.querySelectorAll(".course_table");
  let result = "";
  // console.log(el);
  for (let i = 0; i < course.length; i++) {
    console.log(course[i].lesson.length);
    for (let j = 0; j < course[i].lesson.length; j++) {
      result += `<tr>
      <th scope="row">${j + 1}</th>
      <td class="text-secondary">${course[i].lesson[j].date}</td>
      <td>${course[i].lesson[j].content}</td>
      <td>
        <a
          href="./${course[i].lesson[j].link}"
          class="btn btn-outline-secondary text-nowrap"
          >點此前往</a
        >
      </td>
    </tr>`;
    }
    el[i].innerHTML = result;
    result = "";
  }
}

function render(course) {
  createChapter(course);
  createTable(course);
}

render(udemy_01);
