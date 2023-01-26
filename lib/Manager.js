const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, email, name){
        super(id,email,name);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Manager";
    }
    getOfficenumber(num){

    }
    getRole(role){
        return this.role;

    }

}
module.exports = Manager