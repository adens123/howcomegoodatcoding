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

// console.log(nickName, mail, password, errorSpan);
