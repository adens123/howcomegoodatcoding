// 作業分享區
const assignments = [
  {
    date: "2023/09/15",
    link: "0915.html",
  },
  {
    date: "2023/09/18",
    link: "0918.html",
  },
  {
    date: "2023/09/19",
    link: "0919.html",
  },
];

let el = document.querySelector(".tbody");

let str = "";

for (let i = 0; i < assignments.length; i++) {
  str += `<tr><td><datetime>${assignments[i].date}</datetime></td><td><a href="./assignment/${assignments[i].link}">點此前往</a></td></tr>`;
}

el.innerHTML = str;
