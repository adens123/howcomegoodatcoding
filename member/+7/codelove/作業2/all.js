//邏輯思考方式： 由內而外的建構
// 2-1目標：點擊「新增」按鈕，會將新事項插入到清單最底部
//創造li、span、button節點
//選取 原有節點ul
//將以上節點歸入ul底下

//2-2目標：點擊「刪除」按鈕，會將事項刪除不見
//點button 事件 > li消失
//選到父層li

//2-3目標：匯出純文字，alert 跳出訊息
//增加匯出按鈕
//先選取到ul
//alert

//2-4目標：增加select，項目分成*重要*(橘色)、**緊急**(紅色)
//增加select選單，在span命名class，區分顏色
//選取select，連動span的class顏色 (class名稱用js創造?)
//(if x==important,className==red )
//匯出純文字功能更新：一般、*重要*、**緊急**

//2-5目標：onchange 事件>input文字框，隨程度，有顏色變化
//選擇option 點按 新增 > input框有不同顏色
//創造input class

//1.選到option的值
//2.選到input (getID)
//3.若option值=="normal"，input.className="";
//
function add() {
  let li = document.createElement("li"); //創造節點
  let span = document.createElement("span");
  let button = document.createElement("button");
  let ul = document.getElementById("ul"); //選取原有節點
  let input = document.getElementById("input");

  let degree = document.getElementById("degree"); //選到select
  let option = degree.options[degree.selectedIndex]; //選到option
  span.textContent = input.value; //將input值帶入span
  button.append("刪除"); //讓按鈕上有刪除字樣

  button.onclick = del;
  li.append(span, button);

  if (option.value == "urgent") {
    li.classList.add("red");
  } else if (option.value == "important") {
    li.classList.add("orange");
  } else {
    li.classList.add("normal");
  }

  ul.append(li);
}

function del() {
  event.target.parentElement.remove();

  // button.event.target.textContent;
}

function changeColor() {
  let degree = document.getElementById("degree"); //選到select
  let option = degree.options[degree.selectedIndex]; //選到option

  if (option.value == "urgent") {
    input.className = "input-r";
  } else if (option.value == "important") {
    input.className = "input-o";
  }
}

function outPut() {
  let toDoList = document.getElementById("ul");
  // console.dir(toDoList.children); //ul內的li
  let x = ""; //因為需要字串相加
  let num = 1;

  for (let y of toDoList.children) {
    // console.log(y.children[0].textContent);//li的children第一個
    // x = x + y.children[0].textContent;
    // console.log(x);
    // console.dir(toDoList.children[0].children[0].textContent);
    //ul的第一個li>第一項(span)

    if (y.classList.contains("orange")) {
      x = x + String(num) + "." + "*" + y.children[0].textContent + "*";
    } else if (y.classList.contains("red")) {
      x = x + String(num) + "." + "**" + y.children[0].textContent + "**";
      // x = x + `${num}.**${y.children[0].textContent}**`;
    } else {
      x = x + String(num) + "." + y.children[0].textContent;
    }

    num++;
  }
  alert(x);
}
