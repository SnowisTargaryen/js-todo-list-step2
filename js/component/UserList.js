import UserInput from "./UserInput.js";
import UserItem from "./UserItem.js";

export default class UserList {
  constructor() {
    this.$list = document.querySelector('#user-list');
    this.setEvent();
  }

  render(userItems){
    const userList = userItems.map(user => user.render()).join("");
    let $span = document.createElement("span");
    $span.innerHTML = userList;
    this.$list.querySelector("span") === null ? "" : this.$list.querySelector("span").remove();
    this.$list.prepend($span);
    this.setEvent();
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