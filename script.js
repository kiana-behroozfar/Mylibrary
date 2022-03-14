// deleting anybook
const list = document.querySelector(".list");
const deletes = document.querySelectorAll(".delete");

list.addEventListener("click", (e) => {
  if ((e.target.className = "delete")) {
    e.target.parentElement.remove();
    removeFromLocal(e.target.parentElement.children[0].textContent);
  }
});

function removeFromLocal(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      tasks.splice(i, 1);
    }
  }

  if (tasks.length === 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("tasks", tasks);
  }
}

//adding book

const input = document.querySelector("#add-books input");
const button = document.querySelector(".button");
const ul = document.querySelector("ul");
const spanDelete = `<span class="delete">Delete</span>`;

button.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("please inter a name of book");
  }

  const spanName = document.createElement("span");
  const newLi = document.createElement("li");

  spanName.className = "name";
  spanName.textContent = input.value;

  newLi.append(spanName);
  newLi.innerHTML += spanDelete;
  ul.append(newLi);

  storeToLocalStorage(input.value);

  input.value = "";
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", (e) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let item of tasks) {
    const spanName = document.createElement("span");
    const newLi = document.createElement("li");

    spanName.className = "name";
    spanName.textContent = item;

    newLi.append(spanName);
    newLi.innerHTML += spanDelete;
    ul.append(newLi);
  }
});

function storeToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }
  tasks.push(task);
  localStorage.setItem("tasks", tasks);
}

// hide all of them
const check = document.querySelector("#hide input");
const recent = document.querySelector("#book-list");

check.addEventListener("change", (e) => {
  if (check.checked) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
});

// so go soragh searching

const searchInput = document.querySelector("#search-books input");

searchInput.addEventListener("keyup", (e) => {
  for (let book of ul.children) {
    if (book.firstElementChild.textContent.includes(searchInput.value)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  }
});
