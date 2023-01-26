class Employee {
  constructor() {
    this.id = 100;
    this.email = "test@test.com";
    this.name = "Alice";
    this.role = "Employee";
  }
  getName(name) {
    return this.name;
  }
  getId(id) {
    return this.id;
  }
  getEmail(email) {
    return this.email;
  }
  getRole(role) {
    return this.role;
  }
}

module.exports = Employee;
