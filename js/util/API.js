const URL = "https://js-todo-list-9ca3a.df.r.appspot.com";

export default class API {

    constructor() {
        // this.url = URL;
    }

    methods(type){
        switch (type){
            case 'GET':
                ()=>({
                    method: 'GET'
                })
            case 'POST':
                (contents) => ({
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(contents),
                });
                break;
            case 'DELETE':
                () =>
                    ({
                        method: 'DELETE',
                    });
            case 'PUT':(contents)=>
                ({
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(contents),
                })

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

    getUsersTodos(){
        return  this.request(`${URL}/api/users`, this.methods('GET'));
    }
}