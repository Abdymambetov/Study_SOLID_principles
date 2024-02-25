// Single Responsibility Principle
// Принцип единственной ответственности

class HttpClient{
    get(url: string) {};
    post(){};
    put(){};
    delete(){};
}
class UserService{
    client: HttpClient;
    constructor(client){
        this.client = client;
    }
    getOneUser(id: number){};
    getAllUsers(){};
}

class RequisitesService{
    createRequisites() {}
    getRequisites() {}
    updateRequisites() {}
}

// 1) Появились модули (декомпозиция), читабельность выросла
// 2) Вносить изменения стало проще
// 3) Избавились от антипаттерна GodObject
// 4) Класс инкапсулирует решение одной задачи