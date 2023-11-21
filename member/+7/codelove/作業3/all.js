//3-1目標：點擊按鈕，要能關閉整個 alert 元件
//點擊.btn-close >> 關閉.alert
//1.按鈕增加onclick，(event target).btn-close、父層alert

function closeUp() {
  event.target.closest("div").remove();
}

//3-2目標：toast預設是隱藏，分別點擊button會出現，停留5秒鐘自動消失。
//toast隱藏(全域?)，event.target >toast:block
//1.setTimeout 另用一個function，分別被function Success、Error包在內

let success = document.querySelector(".toast-success");
let error = document.querySelector(".toast-error");

//預設隱藏
success.style.display = "none";
error.style.display = "none";

function toastSuccess() {
  success.style.display = "block";
  setTimeout(() => (success.style.display = "none"), 5000);
}
function toastError() {
  error.style.display = "block";
  setTimeout(() => (error.style.display = "none"), 5000);
}

//3-3目標:點擊按鈕 > modal視窗跳出(背景變成半透明)
//,並且 modal 會有按鈕可以關閉
//點按鈕event target > div.modal 會顯示(置中於螢幕)
//1. 選取div.modal > 預設隱藏
//1.html新增.overlay 當半透明背景,預設隱藏
//1.點擊登入帳號 loginModal(), div.modal跟overlay背景會顯示出來

//2.div.modal的按鈕,增加onclick
//2.點選關閉closeModal(),上面兩者會隱藏

let login = document.querySelector("#login-modal");
let post = document.querySelector("#post-modal");
let overlay = document.querySelector(".overlay");

login.style.display = "none";
post.style.display = "none";

function loginModal() {
  login.style.display = "block";
  overlay.style.display = "block";
}

function postModal() {
  post.style.display = "block";
  overlay.style.display = "block";
}

function closeModal() {
  login.style.display = "none";
  post.style.display = "none";
  overlay.style.display = "none";
}

//3-4
//分別在 function register() 選取三個欄位的input
//error span先用css預設隱藏,有條件的顯示
//if person.trim()===""||person.length>40,
//(.trim()===""意思是除去字串中的空白後，還是空白)

function register() {
  let nickName = document.querySelector("#nickName").value;
  let mail = document.querySelector("#mail").value;
  let password = document.querySelector("#password").value;
  // console.log(typeof nickName);
  //input 陣列裡找目標
  let errorText = document.querySelector(".errorText");
  let errorPassword = document.querySelector(".errorPassword");
  let errorEmail = document.querySelector(".errorEmail");

  // console.dir(nickName);

  if (nickName === "" || nickName.length > 40) {
    errorText.style.visibility = "visible";
  } else {
    errorText.style.visibility = "hidden";
  }

  if (mail === "" || !mail.includes("@")) {
    errorEmail.style.visibility = "visible";
  } else {
    errorEmail.style.visibility = "hidden";
  }

  if (password === "") {
    errorPassword.style.visibility = "visible";
  } else if (password.length < 8 || password.length > 100) {
    errorPassword.style.visibility = "visible";
  } else {
    errorPassword.style.visibility = "hidden";
  }
}

// 3-5 collapse 折疊效果
//目標：(1)answer預設隱藏
///////(2)點一下,answer滑下來
//////再點一下，回到步驟(1)
//1.answer 用css預設隱藏
//2.question 增加onclick="collapse",點擊出現anser
//給answer固定高度,然後再高度0 (max-high)
//

function collapse() {
  answer = event.target.nextElementSibling;

  event.target.classList.toggle("active"); //新增 active class

  if (answer.style.maxHeight != "") {
    answer.style.maxHeight = null;
  } else if (answer.style.maxHeight == "") {
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

//3-6 dropdown 下拉式選單
//1.選到需要隱藏的下拉選單的 整個部分 aboutList
//2.aboutList 設定 監聽事件，當滑鼠滑過會顯示出下拉選單
//3.分成兩個function：隱藏hode /顯示show
//3.選到隱藏的選單 aboutHide

let aboutList = document.querySelector(".aboutList");
aboutList.addEventListener("mouseover", show);

// console.dir(window);
function show(e) {
  let aboutHide = document.querySelector(".aboutHide");

  event.stopPropagation();
  //停止事件傳播。
  //從DOM樹的一個節點向上傳播（捕獲階段）然後向下傳播（冒泡階段）的過程。//

  aboutHide.style.display = "block";
}
window.onmouseover = function hide(e) {
  let aboutHide = document.querySelector(".aboutHide");
  aboutHide.style.display = "none";
};
//
//
//3-7 carousel 輪播元件
//CSS
//.slidContainer 包著5個.slides 和換頁的a按鈕
//後面再一個div包5個span圓點切換

//slidContainer設定相對定位
//圖片預設隱藏
//按鈕 、圖片文字 設定絕對定位
//img 父層設定動畫效果 fade
//
//JS
//設定初始外觀，第一張圖片會顯示
//設定換頁按鈕、切換上頁

let slideIndex = 1;
showSlides(slideIndex); //顯示第一張圖

//切換上下頁
function plusSlides(n) {
  showSlides((slideIndex += n));
}
//x = x + 1 >> x += 1
//slideIndex = slideIndex + n

function showSlides(n) {
  // let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1;
  } //控制next

  if (n < 1) {
    slideIndex = slides.length;
  } //控制prev

  //n不見得是第n張圖，也可以是我點擊了幾下
  //例如有3張圖，目前已經點了三下到第3張，當我再點一下
  //變成第四下 n = 4, n > slides.length
  //此時就會回到第一張 {slideIndex = 1}

  //且n也可能設計成直接輸入數字

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //圖片預設隱藏
  //因為陣列從0開始計算，所以i永遠都不會大於slides.length(圖片總數)

  slides[slideIndex - 1].style.display = "block";
}
