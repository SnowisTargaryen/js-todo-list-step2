import UserInput from "./UserInput.js";
import UserItem from "./UserItem.js";

export default class UserList {
  constructor() {
    this.$list = document.querySelector('#user-list');
    this.users = [];
    this.userId = 0;
    this.setEvent();


    this.userInput = new UserInput({
      addUser: this.addUser.bind(this),
    });
  }

  render(userItem){
    const userList = userItem.map(user => user.render()).join("");
    this.$list.innerHTML = userList;
    this.$list.insertAdjacentElement("beforeend", this.userInput.render());
    this.setEvent();
  }

  addUser(name) {
    if (!name) return;

    const data = {
      id: this.userId++,
      name,
    };
    this.users.push(new UserItem(data));
    this.render(this.users);
  }

  setEvent(){
    this.$list.addEventListener('click', this.handleClick);
    this.$list.addEventListener('dblclick', this.handleDbClick)
  }

  handleClick({target}){

  }
  handleDbClick({target}){
    const result = confirm("삭제하시겠습니까?");
    result ?  target.remove() : "";
  }
}