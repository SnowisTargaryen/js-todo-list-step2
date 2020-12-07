export default class UserItem {
  constructor({id, name}) {
    this.id = id;
    this.name = name;
  }

  render() {
    return `
      <button data-id="${this.id}" class="ripple">${this.name}</button>
    `;
  }

}