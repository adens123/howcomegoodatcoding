document.querySelectorAll(".btn-close").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    // e.target.closest(".alert").style.display = "none";
    if (e.target.closest(".alert")) {
      e.target.closest(".alert").remove();
    }
  });
});

function getNode(nodeName) {
  return document.querySelector(nodeName);
}

function getNodes(nodeName) {
  return document.querySelectorAll(nodeName);
}

// toast

function toast(node, delayTime) {
  node.style.display = "inline-block";
  setTimeout(() => (node.style.display = "none"), delayTime);
}

function toastSuccess() {
  toast(getNode(".toast-success"), 5000);
}

function toastError() {
  toast(getNode(".toast-error"), 5000);
}

// modal

function loginModal() {
  getNode("#login-modal").style.left = "0";
}

function postModal() {
  getNode("#post-modal").style.left = "0";
}

function modalClose(event) {
  event.target.closest(".modal").style.left = "-100%";
}

getNode(".modal .btn-close").onclick = modalClose;

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.left = "-100%";
  }
};

// form

function validate(element, condition, message) {
  element.style.outline = !element.value || condition ? "2px solid red" : "";

  element.closest(".input-group").querySelector(".error").textContent =
    !element.value ? "不能為空白" : condition ? message : "";
}

function register() {
  const users = [
    {
      element: getNode("#nickName"),
      condition: getNode("#nickName").value.length > 40,
      message: "必須在40字以內"
    },
    {
      element: getNode("#email"),
      condition: !getNode("#email").value.includes("@"),
      message: "必須包含 @ 符號"
    },
    {
      element: getNode("#password"),
      condition:
        getNode("#password").value.length < 8 ||
        getNode("#password").value.length > 100,
      message: "必須在8字以上，100字以內"
    }
  ];

  for (let user of users) {
    validate(user.element, user.condition, user.message);
  }
}

// collapse
// 網頁載入時先取得隱藏內容高度
window.addEventListener("DOMContentLoaded", () => {
  getNodes(".collapse-text").forEach(node => {
    // 取得實際高度*1.5倍後存到dataset
    // 實際高度*1.5倍取代padding效果，如果設padding在height為0px時，還是會有padding的高度，無法完全隱藏
    node.dataset.height = node.offsetHeight * 1.5;
    node.style.height = "0px";
  });
});

function nodeToggle(node) {
  node.style.height = `${
    node.style.height == "0px" ? node.dataset.height : 0
  }px`;
}

function closeOtherNode(index) {
  const otherNodes = [...getNodes(".collapse-text")].filter(
    (item, i) => i != index
  );

  for (let otherNode of otherNodes) {
    otherNode.style.height = "0px";
  }
}

getNodes(".collapse-title").forEach((node, index) => {
  node.addEventListener("click", e => {
    const ansNode = e.target
      .closest(".collapse-item")
      .querySelector(".collapse-text");

    //目前點擊的開關
    nodeToggle(ansNode);

    // 把其他的關掉
    closeOtherNode(index);
  });
});

// dropdown menu

getNode(".dropdown-toggle").addEventListener("click", e => {
  e.preventDefault();
  // 畫面上可能同時有多個下拉選單，所以抓id不抓class
  getNode("#myDropdownMenu").classList.toggle("show");
});

window.addEventListener("click", e => {
  if (!e.target.matches(".dropdown-toggle")) {
    // 假設有同點開多個下拉選單的情境
    for (let node of getNodes(".dropdown-menu")) {
      node.classList.contains("show") && node.classList.remove("show");
    }
  }
});

// carousel

window.addEventListener("load", function () {
  getNode(".carousel").style.height = `${
    getNode(".carousel-item").offsetHeight
  }px`;
});

// 故意不設全域變數index，練習使用閉包 + 立即執行函式
const carouselChange = (function () {
  let index = 0;
  return function (e) {
    getNodes(".carousel-item")[index].classList.remove("active");
    if (e.target.classList.contains("carouselNextBtn")) {
      if (index == getNodes(".carousel-item").length - 1) {
        index = -1;
      }
      index++;
    } else {
      if (index == 0) {
        index = getNodes(".carousel-item").length;
      }
      index--;
    }

    getNodes(".carousel-item")[index].classList.add("active");
  };
})();

getNode(".carouselNextBtn").onclick = carouselChange;
getNode(".carouselPreBtn").onclick = carouselChange;

// 自動輪播
// setInterval(
//   (function () {
//     let index = 0;
//     return function () {
//       getNodes(".carousel-item")[index].classList.remove("active");
//       if (index == getNodes(".carousel-item").length - 1) {
//         index = -1;
//       }
//       index++;
//       getNodes(".carousel-item")[index].classList.add("active");
//     };
//   })(),
//   3000
// );
