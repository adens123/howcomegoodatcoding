function ibuy() {
  let data = document.getElementById("keyword").value;
  document.getElementById("custom-name").textContent = data;

  let classification = document.getElementById("Classification"); // select (先選到整個
  let data2 = classification.options[classification.selectedIndex].textContent; // option (再索引單個)
  document.getElementById("Classific").textContent = data2;

  let type = document.getElementById("type");
  let data3 = type.options[type.selectedIndex].textContent;
  document.getElementById("type3").textContent = data3; //先選到type3這個欄位，最後讓它列印出data3的"值"(=客人輸入的資料)

  alert(
    data + "謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！"
  );
}

function myFunction() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}
