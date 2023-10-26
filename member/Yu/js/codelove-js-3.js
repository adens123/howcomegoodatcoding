// 通用 function
function getNode(nodeName) {
  return document.querySelector(nodeName);
}
function getAllNode(nodeName) {
  return document.querySelectorAll(nodeName);
}

// alert 示警元件
let btn_close = getAllNode(".alert>button");

for (let item of btn_close) {
  item.onclick = del_alert;
}

function del_alert() {
  let e = event.target.closest(".alert");
  e.remove();
}

// toast 吐司元件
let successToast = getNode(".toast-success");
let errorToast = getNode(".toast-error");

function toastSuccess() {
  successToast.classList.add("show", "mt-3", "p-3");
  setTimeout(function () {
    successToast.classList.remove("show");
  }, 5000);
}

function toastError() {
  errorToast.classList.add("show", "mt-3", "p-3");
  setTimeout(function () {
    errorToast.classList.remove("show");
  }, 5000);
}

// modal 互動視窗
let login_modal = getNode("#login-modal");
let post_modal = getNode("#post-modal");
let modal = getAllNode(".modal");
for (let item of modal) {
  let btn_close = item.querySelector(".btn-close");
  btn_close.style.backgroundImage = "none"; // 消除bs預設關閉圖案
  btn_close.onclick = closeModal;
}

function closeModal() {
  let e = event.target;
  e.closest(".modal").style.display = "none";
}

function loginModal() {
  login_modal.style.display = "block";
}

function postModal() {
  post_modal.style.display = "block";
}

// validation 表單驗證
let form = getNode("form");

let nField = form.querySelector(".name");
let nInput = nField.querySelector("input");

let eField = form.querySelector(".email");
let eInput = eField.querySelector("input");

let pField = form.querySelector(".password");
let pInput = pField.querySelector("input");

let findValid = form.querySelectorAll("input");

let signup_submit = getNode(".btn_signup");
signup_submit.onclick = signup;

let isValid = getNode(".valid-txt");
let notValid = getNode(".invalid-txt");

function signup() {
  event.preventDefault();
  let hasValid = true;

  chkName();
  chkEmail();
  chkPwd();

  for (let item of findValid) {
    if (!item.classList.contains("valid")) hasValid = false;
  }

  hasValid ? signup_success() : signup_failed();

  setTimeout(() => {
    nField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
}

function chkName() {
  let userName = nInput.value;
  let errorMsg = nField.querySelectorAll(".error");
  // console.log(errorMsg);
  if (userName === "" || userName.length >= 40) {
    nField.classList.add("shake");
    nInput.classList.add("invalid");
    nInput.classList.remove("valid");
    for (let item of errorMsg) {
      item.style.display = "block";
    }
  } else {
    nInput.classList.add("valid");
    nInput.classList.remove("invalid");
    for (let item of errorMsg) {
      item.style.display = "none";
    }
  }
}

function chkEmail() {
  let userEmail = eInput.value;
  let errorMsg = eField.querySelectorAll(".error");
  if (!userEmail.includes("@")) {
    eField.classList.add("shake");
    eInput.classList.add("invalid");
    eInput.classList.remove("valid");
    for (let item of errorMsg) {
      item.style.display = "block";
    }
  } else {
    eInput.classList.add("valid");
    eInput.classList.remove("invalid");
    for (let item of errorMsg) {
      item.style.display = "none";
    }
  }
}

function chkPwd() {
  let userPwd = pInput.value.length;
  let errorMsg = pField.querySelectorAll(".error");
  if (userPwd < 8 || userPwd > 100) {
    pField.classList.add("shake");
    pInput.classList.add("invalid");
    pInput.classList.remove("valid");
    for (let item of errorMsg) {
      item.style.display = "block";
    }
  } else {
    pInput.classList.add("valid");
    pInput.classList.remove("invalid");
    for (let item of errorMsg) {
      item.style.display = "none";
    }
  }
}

function signup_success() {
  isValid.style.display = "block";
  notValid.style.display = "none";
  setTimeout(() => {
    isValid.style.display = "none";
  }, 5000);
}

function signup_failed() {
  notValid.style.display = "block";
  isValid.style.display = "none";
  setTimeout(() => {
    notValid.style.display = "none";
  }, 5000);
}

// collapse 折疊效果
let faq = getNode(".faq");

let titles = faq.querySelectorAll(".faq-title");

for (let items of titles) items.onclick = collapse_open;

function collapse_open(e) {
  //   console.log(e.target.nextElementSibling);
  let content = e.target.nextElementSibling;

  if (!content.style.maxHeight) {
    content.style.maxHeight = `${content.scrollHeight}px`;
    e.target.querySelector("i").classList.toggle("arrow-rotate");
  } else {
    content.style.maxHeight = "";
    e.target.querySelector("i").classList.toggle("arrow-rotate");
  }
}

// dropdown
let menu = getNode(".nav-list");

let menu_item = menu.querySelectorAll(".nav-item");

// console.log(menu_item);
for (let item of menu_item) item.onclick = dropdown_visible;

function dropdown_visible(e) {
  e.preventDefault();
  let el = e.target.closest(".nav-item");
  let dropdown_list = el.querySelector(".dropdown-list");

  if (!(dropdown_list == null)) {
    !dropdown_list.style.maxHeight
      ? (dropdown_list.style.maxHeight = `${dropdown_list.scrollHeight}px`)
      : (dropdown_list.style.maxHeight = "");
    // if (!dropdown_list.style.maxHeight) {
    //   dropdown_list.style.maxHeight = `${dropdown_list.scrollHeight}px`;
    // } else {
    //   dropdown_list.style.maxHeight = "";
    // }
  }
}

// carousel
let carousel = getNode(".carousel-track");
let list = carousel.querySelector(".carousel-list");

let btns = carousel.querySelectorAll(".btn");

for (let btn of btns) {
  btn.onclick = slideSwitch;
}

function slideSwitch(e) {
  // console.log(e.target.closest("button"));
  let btn = e.target.closest("button");
  let current = list.querySelector(".active");

  //如果點擊prev表示前一個且索引值-1，否則是next表示下一個並+1
  let offset = btn.className.includes("prev") ? -1 : 1;
  // console.log(offset);

  //找到目前的圖片索引值並計算增加或減少
  let nextIndex = [...list.children].indexOf(current) + offset;
  // console.log(list.children);

  // 如果索引值小於0，表示當前為第一張圖片（索引值0），因此接著是最後一張
  if (nextIndex < 0) nextIndex = list.children.length - 1;

  // 如果索引值大於等於總長度，表示當前為最後一張圖片，因此接著是第一張
  if (nextIndex >= list.children.length) nextIndex = 0;

  list.children[nextIndex].classList.add("active");
  current.classList.remove("active");
}
