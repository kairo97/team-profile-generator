class Employee {
    constructor(id,email,name){
        this.id = id;
        this.email = email;
        this.name = name;
}
}
const Jared = new Employee(1, "jared@fakemail.com","Jared");

module.exports = Employee