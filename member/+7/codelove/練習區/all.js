//邏輯思考方式： 由內而外的建構
// 2-1目標：點擊「新增」按鈕，會將新事項插入到清單最底部
//創造li、span、button節點
//選取 原有節點ul
//將以上節點歸入ul底下
//input值=span

//2-2目標：點擊「刪除」按鈕，會將事項刪除不見
//點"del()" > li消失
//需要選到刪除鈕的父層--整個li

//2-3目標：匯出純文字，alert 跳出訊息
//增加匯出按鈕
//陣列+for迴圈。先選取到ul
//alert

//2-4目標：增加select，項目分成*重要*(橘色)、**緊急**(紅色)
//1.增加select選單，在li命名class，區分文字顏色
//2.選取select，會連動li的class顏色 (className用創造)
//2.條件判斷(if x==important,classList=red )
//匯出純文字功能更新：一般、*重要*、**緊急**

//2-5目標：onchange 事件>input文字框，隨程度，有顏色變化
//選擇option 點按 新增 > input框有不同顏色
//創造input class 有顏色之分

//1.選到option的值
//2.選到input (getID)
//3.條件判斷 (if option值=="important"，input.className="");

//2-6目標：li再加入"標示完成"的按鈕(.done)，span後面"顯示(已完成)"
//1.創造 標示完成按鈕 (function target)、(已完成)span
//2.按鈕文字：標示為已完成
//2.預設span(已完成)隱藏，點擊.done==顯示
//3.fin()內，if條件判斷，選取span、.done
//3.if span沒有出現，執行：span顯示，按鈕文字顯示--標示為未完成
function add() {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let sp = document.createElement("span"); //已完成
  let done = document.createElement("button"); //標示為已完成
  let delet = document.createElement("button"); //刪除
  //創造--選取--歸入節點
  let ul = document.querySelector("#ul");
  let input = document.querySelector("#input");

  let select = document.querySelector("#select");
  let option = select.options[select.selectedIndex];

  li.append(done, span, sp, delet); //由內而外建構
  span.textContent = input.value;
  sp.style.display = "none"; //已完成 預設隱藏
  sp.textContent = "已完成";
  done.textContent = "標示為已完成";
  delet.textContent = "刪除";
  delet.onclick = del;
  done.onclick = fin;

  if (option.value == "important") {
    li.classList.add("orange");
  } else if (option.value == "urgent") {
    li.classList.add("red");
  } else {
    li.classList.add("normal");
  }

  ul.append(li);
}

function del() {
  event.target.closest("li").remove();
}

function changeColor() {
  let select = document.querySelector("#select");
  let option = select.options[select.selectedIndex];
  let input = document.querySelector("#input");
  if (option.value == "urgent") {
    input.classList = "input-r";
  } else if (option.value == "important") {
    input.classList = "input-o";
  }
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
  let x = "";
  let num = 1;
  for (let y of document.querySelectorAll("li")) {
    if (y.classList.contains("orange")) {
      x =
        x + String(num) + "." + "*" + y.querySelector("span").textContent + "*";
    } else if (y.classList.contains("red")) {
      x =
        x +
        String(num) +
        "." +
        "**" +
        y.querySelector("span").textContent +
        "**";
    } else {
      x = x + String(num) + "." + y.children[1].textContent;
    }
  }
  num++;
  alert(x);
}
