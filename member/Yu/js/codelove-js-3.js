// alert 示警元件
let btn_close = document.querySelectorAll(".alert>button");

for (let item of btn_close) {
  item.onclick = del_alert;
}

function del_alert() {
  let e = event.target.closest(".alert");
  e.remove();
}

// toast 吐司元件
let successToast = document.querySelector(".toast-success");
let errorToast = document.querySelector(".toast-error");

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
let login_modal = document.querySelector("#login-modal");
let post_modal = document.querySelector("#post-modal");
let modal = document.querySelectorAll(".modal");
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
let form = document.querySelector("form");

let nField = form.querySelector(".name");
let nInput = nField.querySelector("input");

let eField = form.querySelector(".email");
let eInput = eField.querySelector("input");

let pField = form.querySelector(".password");
let pInput = pField.querySelector("input");

let findValid = form.querySelectorAll("input");

let signup_submit = document.querySelector(".btn_signup");
signup_submit.onclick = signup;

let isValid = document.querySelector(".valid-txt");
let notValid = document.querySelector(".invalid-txt");

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
let faq = document.querySelector(".faq");

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
