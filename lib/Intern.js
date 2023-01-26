const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id,email,github){
        this.id = id;
        this.email = email;
        this.github = github;
    }
}
module.exports = Intern