export default class TodoList {
    constructor() {
      this.$list = document.querySelector(".todo-list");
    }

    render(todoItems) {
      const todoList = todoItems.map(item => item.render()).join("");
      this.$list.innerHTML = todoList;
    }
}