export default class UserInput {
  constructor({ addUser }) {
    this.$btn = document.querySelector('.user-create-button');
    this.$btn.addEventListener('click', this.handleUserCreate.bind(this));
    this.addUser = addUser;
  }

  handleUserCreate() {
    const name = prompt("추가하고 싶은 이름을 입력해주세요.");
    this.addUser(name);
  }

  render() {
    return this.$btn;
  }
}