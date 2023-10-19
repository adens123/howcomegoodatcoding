document.querySelectorAll(".btn-close").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.target.closest(".alert").style.display = "none";
  });
});
