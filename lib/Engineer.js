const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(id,email,name){
        super(id,email,name);
        this.id = id;
        this.email = email;
        this.name= name;
    }
}
const Alec = new Engineer(2, "alec@fakemail.com", "Alec");
const Grace = new Engineer(3, "grace@fakemail.com", "Grace");
const Tammer = new Engineer(4, "tammer@fakemail.com", "Tammer");
module.exports = Engineer