export default class UserItem {
  constructor(item) {
    this.id = item._id;
    this.name = item.name;
  }

  render() {
    return `
      <button data-id="${this.id}" class="ripple">${this.name}</button>
    `;
  }
}
