const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, email, name, num){
        super(id,email,name);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = num;
        this.role = "Manager";
    }
    getOfficeNumber(num){
        return this.officeNumber
    }
    getRole(role){
        return this.role;

    }

}
module.exports = Manager