const codelove_01 = [
  {
    ch_num: 1,
    chapter: "JavaScript（一）幫衣服工廠做個好用表單",
    lesson: [
      {
        date: "2023/09/22",
        content: "基本的函數操作、onclick 事件",
        link: "https://jsfiddle.net/kulimusoda/mk2ptwc5/26/",
      },
      {
        date: "2023/09/25",
        content: "基本的變數操作、從 html 取得內容",
        link: "https://jsfiddle.net/kulimusoda/cuh8wyrL/104/",
      },
      {
        date: "2023/09/27",
        content: "修改 html 的內容",
        link: "https://jsfiddle.net/kulimusoda/wuLntymf/23/",
      },
      {
        date: "2023/09/28",
        content: "基本的陣列操作",
        link: "https://jsfiddle.net/kulimusoda/gqxut4cr/58/",
      },
      {
        date: "2023/09/29",
        content: "基本的 if/else 條件流程控制",
        link: "https://jsfiddle.net/kulimusoda/sv36cquf/8/",
      },
      {
        date: "2023/10/02",
        content: "認識資料型態與轉換",
        link: "https://jsfiddle.net/kulimusoda/8men7y34/26/",
      },
      {
        date: "2023/10/04",
        content: "認識巢狀結構",
        link: "https://jsfiddle.net/kulimusoda/p2Lv917r/13/",
      },
    ],
  },
  {
    ch_num: 2,
    chapter: "JavaScript（二）親手做個待辦事項小工具",
    lesson: [
      {
        date: "2023/10/09",
        content: "認識 DOM 樹、新增元素",
        link: "https://jsfiddle.net/kulimusoda/Ls8qv6zk/122/",
      },
      {
        date: "2023/10/11",
        content: "從 DOM 樹移除元素、動態加上 onclick 事件",
        link: "https://jsfiddle.net/kulimusoda/Ls8qv6zk/200/",
      },
      {
        date: "2023/10/12",
        content: "認識 for 迴圈",
        link: "https://jsfiddle.net/kulimusoda/Ls8qv6zk/277/",
      },
      {
        date: "2023/10/13",
        content: "讀取與修改 DOM 元素的 class",
        link: "https://jsfiddle.net/kulimusoda/Ls8qv6zk/363/",
      },
      {
        date: "2023/10/16",
        content: "認識 onchange 事件",
        link: "https://jsfiddle.net/kulimusoda/Ls8qv6zk/376/",
      },
      {
        date: "2023/10/17",
        content: "讀取與修改 DOM 元素的 style",
        link: "https://codepen.io/yuch3n_chen/pen/PoXMxvO",
      },
      {
        date: "2023/10/18",
        content: "用 Selector API 選取元素",
        link: "https://codepen.io/yuch3n_chen/pen/LYqPzer",
      },
    ],
  },
  {
    ch_num: 3,
    chapter: "JavaScript（三）自己做看看實務常用 UI 元件",
    lesson: [
      {
        date: "2023/10/19",
        content: "alert 示警元件",
        link: "js-3-ui.html#comp-alert",
      },
      {
        date: "2023/10/20",
        content: "toast 吐司元件",
        link: "js-3-ui.html#comp-toast",
      },
      {
        date: "2023/10/23",
        content: "modal 互動視窗元件",
        link: "js-3-ui.html#comp-modal",
      },
      {
        date: "2023/10/24",
        content: "表單驗證",
        link: "js-3-ui.html#comp-validation",
      },
      {
        date: "2023/10/25",
        content: "collapse 折疊效果",
        link: "js-3-ui.html#comp-collapse",
      },
      {
        date: "2023/10/26",
        content: "dropdown 下拉式選單",
        link: "js-3-ui.html#comp-dropdown",
      },
      {
        date: "2023/10/27",
        content: "carousel 輪播元件",
        link: "js-3-ui.html#comp-carousel",
      },
    ],
  },
  {
    ch_num: 4,
    chapter: "JavaScript（四）學會第三方套件的使用方法",
    lesson: [
      {
        date: "2023/10/30",
        content: "autosize 套件",
        link: "js-4-api.html#api-autosize",
      },
      {
        date: "2023/10/31",
        content: "vanilla-lazyload 套件",
        link: "js-4-lazyload.html",
      },
      {
        date: "2023/11/01",
        content: "Chart.js 套件",
        link: "js-4-api.html#api-chart",
      },
      {
        date: "2023/11/02",
        content: "jQuery 套件",
        link: "js-4-api.html#api-jQuery",
      },
      {
        date: "2023/11/03",
        content: "xdan/datetimepicker 套件",
        link: "js-4-api.html#api-datetimepicker",
      },
      {
        date: "2023/11/06",
        content: "kenwheeler/slick 套件",
        link: "js-4-api.html#api-slick",
      },
      {
        date: "2023/11/07",
        content: "TinyMCE 套件",
        link: "js-4-api.html#api-tinyMCE",
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
        <th class="d-none d-lg-table-cell" scope="col">#</th>
        <th class="d-none d-lg-table-cell" scope="col">日期</th>
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
        <th class="d-none d-lg-table-cell" scope="col">#</th>
        <th class="d-none d-lg-table-cell" scope="col">日期</th>
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
    // console.log(course[i].lesson.length);
    for (let j = 0; j < course[i].lesson.length; j++) {
      result += `<tr>
      <th class="d-none d-lg-table-cell" scope="row">第${j + 1}課</th>
      <td class="d-none d-lg-table-cell text-secondary">${
        course[i].lesson[j].date
      }</td>
      <td>${course[i].lesson[j].content}</td>
      <td>
        <a
          href="${course[i].lesson[j].link}"
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

render(codelove_01);
