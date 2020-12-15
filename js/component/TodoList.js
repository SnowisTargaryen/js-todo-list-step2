export default class TodoList {
  constructor() {
    this.$list = document.querySelector(".todo-list");
    this.$list.addEventListener("click", this.handleClick);
    this.$list.addEventListener("dblclick", this.handleDblClick);
  }

  render(todoItems) {
    if (!todoItems) return;
    const todoList = todoItems.map((item) => item.render()).join("");
    this.$list.innerHTML = todoList;
  }

  handleClick({ target }) {
    const id = target.closest("li").dataset.id;
    const value = target.classList.value;

    switch (value) {
      case "toggle":
        target.parentNode.parentNode.classList.toggle("completed");
        break;
      case "destroy":
        const li = target.parentNode.parentNode;
        li.remove();
        break;
    }
  }
  handleDblClick({ target }) {
    const id = target.closest("li").dataset.id;
    if (target.classList.value === "label") {
      target.parentNode.parentNode.classList.add("editing");
      target.parentNode.nextElementSibling.focus();
    }
  }
}
