export default class TodoItem{
    constructor({id, text}){
      this.id = id;
      this.text = text;
    }

    render() {
        return `
        <li data-id=${this.id}>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label class="label">
              <select class="chip select">
                <option value="0" selected>순위</option>
                <option value="1">1순위</option>
                <option value="2">2순위</option>
              </select>
              ${this.text}
            </label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${this.text}" />
        </li>
        `
    }

}