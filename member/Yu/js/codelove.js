const data_codelove_01 = [
  {
    date: "2023/09/22",
    chapter: "基本的函數操作、onclick 事件",
    link: "https://jsfiddle.net/kulimusoda/mk2ptwc5/26/",
  },
  {
    date: "2023/09/25",
    chapter: "基本的變數操作、從 html 取得內容",
    link: "https://jsfiddle.net/kulimusoda/cuh8wyrL/104/",
  },
];

// 加入表格內容

let el2 = document.querySelector(".codelove-01");

let str2 = "";

for (let i = 0; i < data_codelove_01.length; i++) {
  str2 += `<tr>
  <th scope="row">第${i + 1}課</th>
  <td>${data_codelove_01[i].date}</td>
  <td>${data_codelove_01[i].chapter}</td>
  <td><a class="btn btn-outline-secondary text-nowrap" href="${
    data_codelove_01[i].link
  }" target="_blank">點此前往</a></td>
</tr>`;
}

el2.innerHTML = str2;
