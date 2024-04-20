const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    
    function addTask() {
      const taskText = taskInput.value;
      if (taskText === '') {
        alert('Please enter a task');
        return;
      }
    
      const taskItem = document.createElement('div');
      taskItem.className = 'task';
      taskItem.innerHTML = `${taskText} <button class="edit-btn" onclick="editTask(this)">Edit</button> <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(taskItem);
    
      taskInput.value = '';
    }
    
    function editTask(btn) {
      const newText = prompt('Edit the task:', btn.parentNode.firstChild.textContent);
      if (newText !== null) {
        btn.parentNode.firstChild.textContent = newText;
      }
    }
    
    function deleteTask(btn) {
      btn.parentNode.remove();
    }