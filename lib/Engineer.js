const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(id,email,name, github){
        super(id,email,name);
        this.id = id;
        this.email = email;
        this.name= name;
        this.github = github;
        this.role = "Engineer";
    }
    getRole(role){
        return this.role;
    }
    getGithub(github){
        return this.github;

    }

}
module.exports = Engineer