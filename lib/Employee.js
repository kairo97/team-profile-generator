class Employee {
    constructor(id,email,name){
        this.id = id;
        this.email = email;
        this.name = name;
    }
getName(name){
return this.name;
}
getId(id){
return this.id;
}
getEmail(email){
return this.email;
}
}
    
module.exports = Employee