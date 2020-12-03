import UserInput from "./UserInput.js";
import UserItem from "./UserItem.js";

export default class UserList {
  constructor() {
    this.$list = document.querySelector('#user-list');

    this.users = [];

    this.userInput = new UserInput({
      addUser: this.addUser.bind(this),
    });
  }

  render(userItem){
    const userList = userItem.map(user => user.render()).join("");
    this.$list.innerHTML = userList;
    this.$list.insertAdjacentElement("beforeend", this.userInput.render());
  }

  addUser(name) {
    this.users.push(new UserItem(name));
    this.render(this.users);
  }
}