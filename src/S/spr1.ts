// Single Responsibility Principle
// Принцип единственной ответственности


// Каждый модуль, класс или функция должны иметь только одну причину для изменения.
const http = {send: () => {}};

const genereateId = () => Date.now() * Math.random();


class User{
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string){
        this.id = genereateId();
        this.username = username;
        this.password = password;
    }
}

class UserRepository{
    save(user: User){
        // сохранение пользователя в бд
    }
}

class UserLogger{
    log(user: User){
        console.log(user);
    }
}

class UserController{
    send(user: User){
        return http.send()
    }
}


// 1) Появились модули (декомпозиция), читабельность выросла
// 2) Вносить изменения стало проще
// 3) Избавились от антипаттерна GodObject
// 4) Класс инкапсулирует решение одной задачи

