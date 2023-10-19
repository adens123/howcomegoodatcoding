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

  let men = "男裝";

  if (data2 == men) {
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！");
  } else {
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！");
  }
  //
  //   1.先選到 服裝分類 這個選單，且可以辨別 使用者選擇選單的細項(男裝/女裝)
  let clothing = classification.options[classification.selectedIndex].value;

  // 2.取到 顧客輸入,訂購數量 的值
  quantityCl = document.getElementById("quantityCl").value;

  //3.取到 服裝分類,之後 初步估價, 怎麼計算? (訂購數量*價錢)
  if (clothing == "men") {
    document.getElementById("evaluate").textContent =
      String(Number(quantityCl)) * 600;
  } else {
    document.getElementById("evaluate").textContent =
      String(Number(quantityCl)) * 500;
  }
  // 4.列印出訂購數量&初步估價給客戶看
  document.getElementById("quantity").textContent = quantityCl;

  //value="men"(string)
  //(顧客input數字預設是string),轉Number才可計算數量，計算完再轉回string,初步估價欄位evaluate是string
}

function myFunction() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}
