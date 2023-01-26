const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, email, github){
        super(id,email,github);
        this.id = id;
        this.email = email;
        this.github = github;
    }
}
module.exports = Manager