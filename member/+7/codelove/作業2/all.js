//點擊「新增」按鈕，會將新事項插入到清單最底部
//創造節點
//抓到input資料，給節點取用資料
//點擊按鈕後，ul新增一個li

function add() {
  let li = document.createElement("li"); //創造節點
  let span = document.createElement("span"); //創造節點
  let ul = document.getElementById("ul"); //取原有節點
  let input = document.getElementById("input");

  ul.append(li);
  li.append(span);
  span.append(input.value);
}
