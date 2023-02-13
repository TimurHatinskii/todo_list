// Форма
// Список задач
const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "1 Eu ea incididunt sunt consectetur fugiat non.",
  },

  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "2 Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },

  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "3 Eu ea incididunt sunt consectetur fugiat non.",
  },

  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "4 Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",

      "--notdanger-btn-bg": "#35dc59",
      "--notdanger-btn-text-color": "#fff",
      "--notdanger-btn-hover-bg": "#21bd36",
      "--notdanger-btn-border-color": "#35dc59",

      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    },

    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",

      "--notdanger-btn-bg": "#1c742f",
      "--notdanger-btn-text-color": "#fff",
      "--notdanger-btn-hover-bg": "#12501f",
      "--notdanger-btn-border-color": "#1c742f",

      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },

    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",

      "--notdanger-btn-bg": "#a4dcb0",
      "--notdanger-btn-text-color": "#212529",
      "--notdanger-btn-hover-bg": "#719a77",
      "--notdanger-btn-border-color": "#658f6e",

      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
  };

  let lastSelectedTheme = localStorage.getItem("app_theme") || "default";

  // Elemnts UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];
  const themeSelect = document.getElementById("themeSelect");

  //* Ищем на нашей разметке div который содержит в себе сообщение "Список дел пуст!"
  const tasksListEmpty = document.querySelector(".tasks-list-empty");

  // Events
  setTheme(lastSelectedTheme);
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeletehandler);

  //* Обработчик событий кнопки выполнения задачи
  listContainer.addEventListener("click", onCompletedhandler);

  themeSelect.addEventListener("change", onThemeSelectHandler);

  //* Вызов функции проверки списка на пустоту, выдает сообщение "Список дел пуст!"
  msgListEmpty(objOfTasks);

  //* Функции проверки списка на пустоту, если пустой, то отобразить сообщение "Список дел пуст!"
  //* ------------------------ */
  function msgListEmpty() {
    if (listContainer.children.length == 0) {
      tasksListEmpty.classList.remove("none");
    } else {
      tasksListEmpty.classList.add("none");
      return;
    }
  }
  //* ------------------------ */

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Передайте список задач!");
      return;
    }

    const fragment = document.createDocumentFragment();

    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);

    //* Добавляем цвет к изначально выполненым задачам
    //* ------------------------ */
    if (completed) {
      li.classList.add("bg-success");
    } else {
      li.classList.add("bg-white");
    }
    //* ------------------------ */

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    // * Кнопка удаления задачи
    //* ------------------------ */
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    //* ------------------------ */

    // * Кнопка завершения задачи
    //* ------------------------ */
    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed task";
    completedBtn.classList.add(
      "btn",
      "btn-success",
      "ml-auto",
      "completed-btn"
    );
    //* ------------------------ */

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    li.appendChild(completedBtn);
    return li;
  }

  //* Добавляем на страницу копки "Показать все задачи" и "Показать незавершенные задачи"
  //* ------------------------ */
  const divBtnShow = document.createElement("div");
  divBtnShow.classList.add("d-flex", "justify-content-center");

  const showAllTasksBtn = document.createElement("button");
  showAllTasksBtn.textContent = "Показать все задачи";
  showAllTasksBtn.classList.add(
    "btn",
    "btn-info",
    "ml-4",
    "mt-3",
    "showAllTasksView"
  );

  const showUnfinishedTasksBtn = document.createElement("button");
  showUnfinishedTasksBtn.textContent = "Показать незавершенные задачи";
  showUnfinishedTasksBtn.classList.add(
    "btn",
    "btn-info",
    "ml-4",
    "mt-3",
    "showUnfinishedTasksView"
  );

  divBtnShow.appendChild(showAllTasksBtn);
  divBtnShow.appendChild(showUnfinishedTasksBtn);

  let formSectionCard = document.querySelector(".col");
  formSectionCard.appendChild(divBtnShow);

  showAllTasksBtn.addEventListener("click", completeAllTasks);
  showUnfinishedTasksBtn.addEventListener("click", unfinishedTasks);

  //* Кнопка "Показать все задачи" *//
  //* ------------------------ */
  let showSort = false;

  function completeAllTasks(el) {
    let showTasks = [...listContainer.children].filter(
      (item) => objOfTasks[item.dataset.taskId].completed
    );
    showTasks.forEach((item) => {
      item.classList.remove("none");
    });
    showSort = false;
  }
  //* ------------------------ */

  //* Кнопка "Показать незавершенные задачи" *//
  //* ------------------------ */
  function unfinishedTasks(el) {
    let showTasks = [...listContainer.children].filter(
      (item) => objOfTasks[item.dataset.taskId].completed
    );
    showTasks.forEach((item) => {
      item.classList.add("none");
    });
    showSort = true;
  }
  //* ------------------------ */

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Пожалуйста введите title и body");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();
    msgListEmpty(objOfTasks);
  }

  function createNewTask(title, body) {
    const newTask = {
      _id: `task-${Math.random()}`,
      completed: false,
      body,
      title,
    };

    objOfTasks[newTask._id] = newTask;
    return {
      ...newTask,
    };
  }

  //* Кнопка выполнения задачи */
  //* ------------------------ */

  function onCompletedhandler({ target }) {
    if (target.classList.contains("completed-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;

      if (objOfTasks[id].completed === true) {
        objOfTasks[id].completed = false;
        if (parent.classList.contains("bg-success")) {
          parent.classList.remove("bg-success");
          parent.classList.add("bg-white");
        }
      } else {
        objOfTasks[id].completed = true;
        if (showSort) {
          unfinishedTasks();
        }
        if (parent.classList.contains("bg-white")) {
          parent.classList.remove("bg-white");
          parent.classList.add("bg-success");
        }
      }
    }
  }

  //* ------------------------ */

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Точно вы хотите удалить задачу: ${title}`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
    msgListEmpty(objOfTasks);
  }

  function onDeletehandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
  }

  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;

    const isConfirmed = confirm(
      `Вы действительно хотите изменить тему: ${selectedTheme}`
    );

    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }

    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem("app_theme", selectedTheme);
  }

  function setTheme(name) {
    const selectedThemObj = themes[name];

    Object.entries(selectedThemObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);
