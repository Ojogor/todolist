// Get the todo list from storage and display it in the popup
chrome.storage.sync.get('todoList', function(data) {
    if (data.todoList) {
      var list = JSON.parse(data.todoList);
      var ul = document.getElementById('todo-list');
      for (var i = 0; i < list.length; i++) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = list[i].checked; // set the state of the checkbox
        checkbox.addEventListener('click', function() {
          updateList();
        });
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(list[i].text));
        var removeButton = document.createElement('img');
        removeButton.src = 'icons/cross.png';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
          var listItem = this.parentElement;
          ul.removeChild(listItem);
          updateList();
        });
        li.appendChild(removeButton);
        ul.appendChild(li);
      }
    }
  });
  
  // Add a new item to the todo list
  document.getElementById('add-button').addEventListener('click', function(e) {
    e.preventDefault();
    var input = document.getElementById('new-item');
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
      updateList();
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));
    var removeButton = document.createElement('img');
    removeButton.src = 'icons/cross.png';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function() {
      var listItem = this.parentElement;
      ul.removeChild(listItem);
      updateList();
    });
    li.appendChild(removeButton);
    ul.appendChild(li);
    input.value = '';
  
    // Save the updated todo list to storage
    updateList();
  });
  
  // Update the todo list in storage
  function updateList() {
    var ul = document.getElementById('todo-list');
    var list = [];
    for (var i = 0; i < ul.children.length; i++) {
      var item = ul.children[i];
      var text = item.textContent;
      var checked = item.querySelector('input').checked;
      list.push({ text: text, checked: checked }); // include the state of the checkbox in the item
    }
    chrome.storage.sync.set({ todoList: JSON.stringify(list) });
  }