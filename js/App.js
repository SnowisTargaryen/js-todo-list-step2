import TodoInput from "./component/TodoInput.js";
import TodoItem from "./component/TodoItem.js"
import TodoList from "./component/TodoList.js";
import UserList from "./component/UserList.js";

export default class App {
  constructor() {
    this.todoItems = [];
    this.todoId = 0;

    this.todoList = new TodoList();
    this.userList = new UserList();

    new TodoInput({
      addTodo: this.addTodo.bind(this),
    });

  }

  addTodo(text) {
    const data = {
      id: this.todoId++, 
      text,
    };
    this.todoItems.push(new TodoItem(data));

    this.render();
  }

  render(){
    this.todoList.render(this.todoItems);
  }
}