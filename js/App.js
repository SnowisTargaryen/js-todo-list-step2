import TodoInput from "./component/TodoInput.js";
import TodoItem from "./component/TodoItem.js"

export default class App {
  constructor() {
    this.todoItems = [];
    this.todoId = 0;

    new TodoInput({
        addTodo: this.addTodo.bind(this),
    })
  }

  addTodo(text) {
    const data = {
      id: this.todoId++, 
      text,
    };
    this.todoItems.push(new TodoItem(data));
  }

}