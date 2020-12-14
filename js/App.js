import TodoInput from "./component/TodoInput.js";
import TodoItem from "./component/TodoItem.js"
import TodoList from "./component/TodoList.js";
import UserList from "./component/UserList.js";
import UserInput from "./component/UserInput.js";
import UserItem from "./component/UserItem.js";

export default class App {
  constructor() {

    this.usersItems = [];
    this.userId = 0;
    this.userList = new UserList();

    new UserInput({
      addUser: this.addUser.bind(this),
    });
  }

  addUser(name) {
    if (!name) return;

    const data = {
      id: this.userId++,
      name,
    };
    this.usersItems.push(new UserItem(data));
    this.render(this.usersItems);
  }

  render(){
    this.userList.render(this.usersItems)
  }
}