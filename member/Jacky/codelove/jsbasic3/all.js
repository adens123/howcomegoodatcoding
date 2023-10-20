document.querySelectorAll(".btn-close").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    // e.target.closest(".alert").style.display = "none";
    e.target.closest(".alert").remove();
  });
});

function toastSuccess() {
  const toastSuccess = document.querySelector(".toast-success");

  toastSuccess.style.display = "inline-block";

  setTimeout(function () {
    toastSuccess.style.display = "none";
  }, 5000);
}

function toastError() {
  const toastError = document.querySelector(".toast-error");

  toastError.style.display = "inline-block";

  setTimeout(function () {
    toastError.style.display = "none";
  }, 5000);
}
