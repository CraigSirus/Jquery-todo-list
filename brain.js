//CREATE TODOLIST
var todoList = [];
//FUNCTIONAL COMPONENTS
//COUNTER
function checkTasks() {
  var num = todoList.length;
  document.getElementById("active").innerHTML=num;
}
//ADDITION
function addTodo(text,comment,priority) {
    const todo = {
        text,
        priority,
        comment,
        checked: false,
        id: Math.floor((Math.random()*1000)+1),
    };   
    todoList.push(todo);
//Logging
    console.log(todoList);
    console.log(comment);
    const list = document.querySelector('.todoList');
    const drop = document.querySelector('.dropbar');

//RENDER HTML
//Still working on this feature
    /*drop.insertAdjacentHTML('beforeend', `
    <div class="btn-group dropright">
  <button type="button" class="btn btn-primary">
  ${todo.text}
  </button>
  <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  </button>
  <div class="dropdown-menu">
  <button class="dropdown-item" type="button">Comments</button>
  <button class="dropdown-item" type="button">Update</button>
  <button class="dropdown-item" type="button">Delete</button>
  </div>
</div>
    `);*/

    list.insertAdjacentHTML('beforeend', `
  <li class="list-group-item todo-item" data-key="${todo.id}">
  <span><h6>Name</h6>${todo.text}<h6>Comment</h6>${todo.comment}<h6>Priority</h6>${todo.priority}</span>
  <br>
  <button class="btn btn-success list-btn js-delete-todo">Complete</button>
  </li>
    `);

    checkTasks();
  }
//CREATE FORM
const form = document.querySelector('.todo-form');
form.addEventListener('submit', event => {
  event.preventDefault();
//QUERY SELECTORS
  const input = document.querySelector('.todoName');
  const addcomment = document.querySelector('.commentOutput');
  const prio = document.querySelector('.priority-selector');
//OBJECT CREATION
//TEXT
  const text = input.value.trim();
  if (text !== '') {
    input.value = '';
    input.focus();
  }
//PRIORITY
  const priority = prio.value;
  if (prio.value === "Low") {
    console.log("Gotcha");
  }
//COMMENT
  const comment = addcomment.value.trim();
  if (comment !== '') {
    addcomment.value = '';
    addcomment.focus();
  }
  addTodo(text,comment,priority);
});

const list = document.querySelector('.todoList');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
    console.log(todoList);
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

function deleteTodo(key) {
  todoList = todoList.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
  checkTasks();
  console.log(todoList);
}
