export default class UserItem {
  constructor(name) {
    this.name = name;
  }

  render() {
    return `
      <button class="ripple">${this.name}</button>
    `;
  }
}