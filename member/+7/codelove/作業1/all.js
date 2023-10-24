function ibuy() {
  let custom = document.getElementById("custom");
  let customName = document.getElementById("customName");
  let classification = document.getElementById("classification");
  let classific = document.getElementById("classific");
  let data2 = classification.options[classification.selectedIndex]; // option (索引單個)
  let cloType = document.getElementById("cloType");
  let cloType3 = document.getElementById("cloType3");
  let data3 = cloType.options[cloType.selectedIndex].textContent;

  let evaluate = document.getElementById("evaluate"); //初步估價

  let quantityCl = document.getElementById("quantityCl"); //訂購數量 input
  let data4 = document.getElementById("quantity"); //訂購數量

  if (custom.value == "") {
    alert("煩請填寫您的大名。");
    return;
  }

  if (quantityCl.value == "") {
    return alert("煩請輸入訂購數量。");
  } else if (quantityCl.value < 100) {
    return alert("抱歉，我們工廠的最低出貨量是 100 件。");
  } else if (quantityCl.value > 5000) {
    return alert("抱歉，我們工廠的最高出貨量是 5,000 件。");
  }

  alert(
    custom.value +
      " 謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！"
  );
  if (data2.value == "men") {
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！");
  } else {
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！");
  }
  if (data2.textContent == "men") {
    evaluate.textContent = String(Number(quantityCl.value)) * 600; //初步估價=訂購數量*600元
  } else {
    evaluate.textContent = String(Number(quantityCl.value)) * 500;
  }
  customName.textContent = custom.value;
  classific.textContent = data2.textContent;
  cloType3.textContent = data3;
  data4.textContent = quantityCl.value; //列印出訂購數量&初步估價給客戶看
}
//顧客input的.textcontent是空值，所以用.value
function myFunction() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}
