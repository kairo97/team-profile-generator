const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id,email,name){
        super(id,email,name)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = "UCLA";
        this.role = "Intern";
    }
    getSchool(school){
        return this.school;

    }
    getRole(role){
        return this.role;

    }
}
module.exports = Intern