const URL = "https://js-todo-list-9ca3a.df.r.appspot.com";

export default class API {
  constructor() {
    // this.url = URL;
  }

  methods(type, contents) {
    console.log("methods :", type, contents);
    switch (type) {
      case "GET":
        () => ({
          method: "GET",
        });
        break;
      case "POST":
        (contents) => ({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contents),
        });
        break;
      case "DELETE":
        () => ({
          method: "DELETE",
        });
        break;
      case "PUT":
        (contents) => ({
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contents),
        });
        break;
    }
  }

  async request(api, method) {
    try {
      const response = await fetch(`${api}`, method);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  // User list 불러오기
  getUsers() {
    return this.request(`${URL}/api/users`, this.methods("GET"));
  }
  // User의 Todo Item 불러오기
  getUserTodos(userId) {
    return this.request(
      `${URL}/api/users/${userId}/items`,
      this.methods("GET")
    );
  }
  // User 추가하기
  addUser(name) {
    return this.request(`${URL}/api/users`, this.methods("POST", name));
  }
  // User 삭제하기
  deleteUser(userId) {
    return this.request(`${URL}/api/users/${userId}`, this.methods("DELETE"));
  }
}
