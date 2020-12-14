import TodoList from "./TodoList.js";
import TodoItem from "./TodoItem.js";
import TodoInput from "./TodoInput.js";
import API from "/js/util/API.js";
import UserItem from "./UserItem.js";


export default class UserList {
  constructor() {
    this.$list = document.querySelector('#user-list');
    this.api = new API();
    this.api.getUsersTodos().then(value => this.render(value));

    this.todoItems = [];
    this.todoId = 0;
    this.todoList = new TodoList();

    new TodoInput({
      addTodo: this.addTodo.bind(this),
    });

    this.setEvent();
  }

  setEvent(){
    this.$list.addEventListener('click', this.handleClick);
    this.$list.addEventListener('dblclick', this.handleDbClick)
  }

  render(userItems){
    const userList = userItems
        .map(value => new UserItem(value))
        .map(user => user.render()).join("");

    let $span = document.createElement("span");
    $span.innerHTML = userList;
    this.$list.querySelector("span") === null ? "" : this.$list.querySelector("span").remove();
    this.$list.prepend($span);
    this.setEvent();
  }

  handleClick({target}){
    const userTodos = {
      name: 'test',
      todoList: [
        {
          id: "1",
          contents: "todocontent",
          priority: "1",
          isCompleted: true,
        }, {
          id: "2",
          contents: "todocontent2",
          priority: "2",
          isCompleted: true,
        }
      ],
    };

    let renderTodoItems = [];
    userTodos.todoList.forEach(value => renderTodoItems.push(new TodoItem(value)));
    new TodoList().render(renderTodoItems);
  }
  handleDbClick({target}){
    const result = confirm("삭제하시겠습니까?");
    result ?  target.remove() : "";
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