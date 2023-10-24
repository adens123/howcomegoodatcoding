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
  if (event.target.closest(".modal")) {
    event.target.closest(".modal").style.left = "-100%";
  }
}

getNode(".modal .btn-close").onclick = modalClose;

window.onclick = modalClose;
