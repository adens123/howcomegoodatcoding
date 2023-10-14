function order() {
    let getName = document.getElementById("input_name").value;
  
  
    let typeData = document.getElementById("type");
    let typeIndex = typeData.selectedIndex;
    let getType = typeData.options[typeIndex].value;
  
    let itemData = document.getElementById('item');
    let itemIndex = itemData.selectedIndex;
    let getItem = itemData.options[itemIndex].value;
  
    let getCount = document.getElementById('input_count').value;
    let num_getCount = parseInt(getCount);
  
    if (getName !== "") {
      if (getType === "none") {
        alert('請選擇款式');
      } else if (getItem === "none") {
        alert('請選擇商品');
      } else if (getCount === "") {
        alert('請輸入數量');
      } else if (num_getCount < 100) {
        alert('抱歉，我們工廠的最低出貨量是 100 件')
      } else if (num_getCount > 5000) {
        alert('抱歉，我們工廠的最高出貨量是 5,000 件')
      } else {
        alert(getName + '\n謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！')
        document.getElementById("orderName").textContent = getName;
  
        document.getElementById("orderType").textContent = getType;
        document.getElementById('orderItem').textContent = getItem;
        document.getElementById('orderCount').textContent = getCount;
  
        if (getType === "男裝") {
          let price = parseInt(getCount) * 600
          document.getElementById('orderPrice').textContent = price + "元";
          alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！");
        } else if (getType === "女裝") {
          let price = parseInt(getCount) * 500
          document.getElementById('orderPrice').textContent = price + "元";
          alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！");
        }
      }
  
    } else {
      alert('請輸入姓名')
    }
  
  
  
  }
  
  
  function about() {
    alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
  }
  