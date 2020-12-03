import TodoInput from "./component/TodoInput.js";
import TodoItem from "./component/TodoItem.js"
import TodoList from "./component/TodoList.js";
import UserList from "./component/UserList.js";

export default class App {
  constructor() {
    this.todoItems = [];
    this.todoId = 0;

    this.todoList = new TodoList();
    new TodoInput({
      addTodo: this.addTodo.bind(this),
    });

    this.userList = new UserList();
  }

  render(){
    this.todoList.render(this.todoItems);
  }

  addTodo(text) {
    const data = {
      id: this.todoId++, 
      text,
    };
    this.todoItems.push(new TodoItem(data));

    this.render();
  }
}