function add() {

    let inputMemo = document.querySelector('#input_memo');
    let getInputMemo = inputMemo.value;
    if (getInputMemo === "") {
      alert('尚未輸入代辦事項!!')
  
    } else {
      let listData = document.querySelector('#list');
      let addLi = document.createElement('li');
      let addDiv = document.createElement('div')
      let addSpan = document.createElement('span');
      let addSpan2 = document.createElement('span');
      let addI = document.createElement('i')
  
      addSpan.textContent = getInputMemo;
      addSpan2.textContent = '◆';
      addLi.className = 'list-item'
      addI.className = 'fa-regular fa-trash-can';
      addI.onclick = delContent;
  
      listData.append(addLi);
      addLi.append(addDiv, addI)
      addDiv.append(addSpan2, addSpan);
  
  
      inputMemo.value = "";
  
    }
  
  }
  
  function delContent() {
    event.target.parentElement.remove();
  }
  