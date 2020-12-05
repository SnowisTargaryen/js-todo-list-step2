export default class TodoList {
    constructor() {
      this.$list = document.querySelector(".todo-list");
      this.$list.addEventListener("click", this.handleClick)
    }

    render(todoItems) {
      const todoList = todoItems.map(item => item.render()).join("");
      this.$list.innerHTML = todoList;
    }

    handleClick(e){
        console.log(e);
    }
}