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
//增加select選單，在li命名class，區分文字顏色
//選取select，連動li的class顏色 (class名稱用創造)
//條件判斷(if x==important,className==red )
//匯出純文字功能更新：一般、*重要*、**緊急**

//2-5目標：onchange 事件>input文字框，隨程度，有顏色變化
//選擇option 點按 新增 > input框有不同顏色
//創造input class
//1.選到option的值
//2.選到input (getID)
//3.條件判斷 (if option值=="important"，input.className="");
//前提 ：(y是li) {
//若 y的class名稱包含orange,則執行{x空值=空值+數字轉字串+.+*+span.的文字+*;}
//}

//2-6目標：li再加入"標示完成"的按鈕(.done)，span後面"顯示(已完成)"
//1.創造 標示完成按鈕 (function target)、(已完成)span
//2.按鈕文字：標示為已完成
//2.預設span(已完成)隱藏，點擊.done==顯示
//3.fin()內，if條件判斷，選取span、.done
//3.if span沒有出現，執行：span顯示，按鈕文字顯示--標示為未完成

function add() {
  let li = document.createElement("li"); //創造節點
  let span = document.createElement("span");
  let button = document.createElement("button");
  let ul = document.querySelector("#ul"); //選取原有節點
  let input = document.querySelector("#input");
  //target
  let done = document.createElement("button"); //創btn-標示為已完成
  let sp = document.createElement("span"); //創span (已完成)

  let select = document.querySelector("#select"); //選到select
  let option = select.options[select.selectedIndex]; //選到option
  span.textContent = input.value; //將input值帶入span

  button.append("刪除"); //讓按鈕上有刪除字樣

  button.onclick = del;

  //event target
  li.append(done, span, sp, button);
  done.onclick = fin;
  done.textContent = "標示為已完成";

  sp.textContent = "已完成";
  sp.style.display = "none"; //(已完成)預設隱藏

  //分程度顏色 >> 條件判斷
  if (option.value == "urgent") {
    li.classList.add("red");
  } else if (option.value == "important") {
    li.classList.add("orange");
  } else {
    li.classList.add("normal");
  }

  ul.append(li); //ul是最外層,收尾
}

function del() {
  event.target.closest("li").remove();
  // button.event.target.textContent;
}

function changeColor() {
  let select = document.querySelector("#select"); //選到select
  let option = select.options[select.selectedIndex]; //選到option
  let input = document.querySelector("#input");

  if (option.value == "urgent") {
    input.classList = "input-r";
  } else if (option.value == "important") {
    input.classList = "input-o";
  }
  //onchange事件 可用在 HTML Form 元素
}

function fin() {
  let a = event.target.closest("li").querySelectorAll("button")[0]; //button (.done)
  let z = event.target.closest("li").querySelectorAll("span")[1]; //span (選到全部的span裡,項目1的span)
  a.textContent = "標示為已完成";

  if (z.style.display === "none") {
    a.textContent = "標示為未完成";
    z.style.display = "block";
  } else {
    a.textContent = "標示為已完成";
    z.style.display = "none";
  }
}

function outPut() {
  let x = ""; //因為需要字串相加
  let num = 1;

  for (let y of document.querySelectorAll("li")) {
    if (y.classList.contains("orange")) {
      x = x + String(num) + "." + "*" + y.querySelector("span").textContent + "*";
    } else if (y.classList.contains("red")) {
      x = x + String(num) + "." + "**" + y.querySelector("span").textContent + "**";
      // x = x + `${num}.**${y.children[0].textContent}**`;
    } else {
      x = x + String(num) + "." + y.querySelector("span").textContent;
    }

    num++;
  }
  alert(x);
  //使用 y.querySelector("span") 是因剛好要選擇第一個span
}
