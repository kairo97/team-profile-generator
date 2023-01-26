const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id,email,name){
        super(id,email,name)
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
module.exports = Intern