import UserList from "./component/UserList.js";
import UserInput from "./component/UserInput.js";
import UserItem from "./component/UserItem.js";
import API from "./util/API.js";

export default class App {
  constructor() {
    this.usersItems = [];
    this.userId = 0;
    this.userList = new UserList();
    this.api = new API();
    new UserInput({
      addUser: this.addUser.bind(this),
    });
  }

  addUser(name) {
    if (!name) return;

    const data = {
      // id: this.userId++,
      name: name,
    };
    console.log("name :", name);
    this.api.addUser(data);
    this.usersItems.push(new UserItem(data));
    // this.render(this.usersItems);
  }

  render() {
    // this.userList.render(this.usersItems);
  }
}
