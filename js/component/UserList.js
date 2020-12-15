import TodoList from "./TodoList.js";
import TodoItem from "./TodoItem.js";
import TodoInput from "./TodoInput.js";
import API from "/js/util/API.js";
import UserItem from "./UserItem.js";

export default class UserList {
  constructor() {
    this.api = new API();
    this.api.getUsers().then((value) => this.render(value));
    this.$list = document.querySelector("#user-list");

    this.todoItems = [];
    this.todoId = 0;
    this.todoList = new TodoList();

    new TodoInput({
      addTodo: this.addTodo.bind(this),
    });

    this.setEvent();
  }

  setEvent() {
    this.$list.addEventListener("click", this.handleClick);
    this.$list.addEventListener("dblclick", this.handleDbClick);
  }

  render(userItems) {
    const userList = userItems
      .map((value) => new UserItem(value))
      .map((user) => user.render())
      .join("");

    let $span = document.createElement("span");
    $span.innerHTML = userList;
    this.$list.querySelector("span") === null
      ? ""
      : this.$list.querySelector("span").remove();
    this.$list.prepend($span);
    this.setEvent();
  }

  handleClick({ target }) {
    event.preventDefault();
    // console.log(target.closest(".user-create-button"));
    if (
      !target.closest("button").dataset ||
      target.closest("button").dataset === null ||
      target.closest(".user-create-button")
    )
      return;
    const id = target.closest("button").dataset.id;

    userTodoList(id).then((items) => new TodoList().render(items));
  }

  handleDbClick({ target }) {
    const result = confirm("삭제하시겠습니까?");
    result ? target.remove() : "";
  }

  addTodo(contents) {
    const data = {
      id: this.todoId++,
      contents,
    };
    this.todoItems.push(new TodoItem(data));
    this.todoList.render(this.todoItems);
  }
}

async function userTodoList(id) {
  const userTodos = await new API().getUserTodos(id).then((items) => {
    return items;
  });
  if (!Array.isArray(userTodos)) return;
  const todoItems = await userTodos.map((value) => new TodoItem(value));
  return todoItems;
}
