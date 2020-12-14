export default class TodoList {
    constructor() {
      this.$list = document.querySelector(".todo-list");
      this.$list.addEventListener("click", this.handleClick)
      this.$list.addEventListener("dblclick", this.handleDblClick)
    }

    render(todoItems) {
        console.log('todoItems :', todoItems);
        const todoList = todoItems.map(item => item.render()).join("");
        this.$list.innerHTML = todoList;
    }

    handleClick({target}){
        const id = target.closest("li").dataset.id;
        const value = target.classList.value;


        switch (value){
            case "toggle":
                console.log("toggle");
                target.parentNode.parentNode.classList.toggle("completed");
                break;
            case "destroy":
                console.log("destroy");
                const li = target.parentNode.parentNode;
                li.remove();
                break;

        }
    }
    handleDblClick({target}){
        const id = target.closest("li").dataset.id;
        // let data = JSON.parse(this.storage.getItem(id));
        if (target.classList.value === "label") {
            target.parentNode.parentNode.classList.add("editing");
            target.parentNode.nextElementSibling.focus();
        }
    }
}