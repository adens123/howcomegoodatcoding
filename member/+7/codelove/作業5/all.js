//overlay預設隱藏
//一進網頁，modal會出現
//yes > (.warn視窗)關閉，看到頁面圖片
//no > 轉址到google首頁

function yes() {
  document.cookie = "Adult=true";
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}

function no() {
  window.location.href = "https://www.google.com/";
}

if (document.cookie) {
  //如果有偵測到cookie，就還原到網頁上
  //只有ture，所以不做if eles驗證
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}
