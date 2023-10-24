// 2-1目標：點擊「新增」按鈕，會將新事項插入到清單最底部
//創造li、span、button節點
//選取 原有節點ul
//將以上節點歸入ul底下

//2-2目標：點擊「刪除」按鈕，會將事項刪除不見
//點button 事件 > li消失
//選到父層li

//2-3目標：匯出純文字，alert 跳出訊息
//增加匯出按鈕
//先選取清單列(li),用陣列迴圈列印出來
//alert

function add() {
  let li = document.createElement("li"); //創造節點
  let span = document.createElement("span");
  let button = document.createElement("button");
  let ul = document.getElementById("ul"); //選取原有節點
  let input = document.getElementById("input");

  span.textContent = input.value; //將input值帶入span
  button.append("刪除"); //讓按鈕上有刪除字樣

  //邏輯思考方式： 由內而外的建構
  button.onclick = del;
  li.append(span, button);
  ul.append(li);
}

function del() {
  event.target.parentElement.remove();

  // button.event.target.textContent;
}

function outPut() {
  let toDoList = document.getElementById("ul");
  // console.dir(toDoList.children); //ul內的li
  let number = 1;
  let x = "";
  for (let y of toDoList.children) {
    // console.log(y.children[0].textContent);
    x = x + y.children[0].textContent;
    // console.log(x);
    console.dir(toDoList.children[0].children[0].textContent);
    //ul的第一個li>第一項(span)
  }
  alert(x);
}
