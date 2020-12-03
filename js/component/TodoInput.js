export default class TodoInput {
  constructor({ addTodo }) {
    this.$input = document.querySelector(".new-todo");
    this.$input.addEventListener("keypress", this.handleTodoSubmit.bind(this));
    this.addTodo = addTodo;
  }

  handleTodoSubmit({ key }) {
    if (key !== "Enter") {
      return;
    }

    const text = this.$input.value.trim();
    if (text === "") {
      return;
    }

    this.addTodo(text);
    this.$input.value = "";
  }
}