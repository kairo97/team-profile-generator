const inquirer = require("inquirer");
const generateHTML = require("./util/generateHTML");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [new Employee("Alice")];

function askQuestion() {
  inquirer
    .prompt([
      {
        name: "question",
        type: "list",
        message: "would you like to add a team member?",
        choices: ["yes", "no"],
      },
      {
        name: "team-member",
        type: "list",
        message: "what role would you like to add?",
        choices: ["Intern", "Engineer", "Manager"],
      },
    ])
    .then((answers) => {
      switch (answers.team - member) {
        case "Intern":
          console.log("add Intern");
          addIntern();
          break;

        case "Engineer":
          console.log("add Engineer");
          addEngineer();
          break;

        case "Manager":
          console.log("add Manager");
          addManager();
        }
    });
}
function addIntern() {
    inquirer.prompt([{
        name: "name",
        message: "what is your Intern's name?",
        type: "input"
    },{
        name: "school",
        type: "input",
        message: "what school did this Intern attend?"
    }
]).then(({name, school}) => {
        console.log(name, school);
        const intern = new Intern(name, school);
        employees.push(intern)
        console.log(employees);
        askQuestion();
    })
}
function addEngineer(){
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: "what is the name of your Engineer?"
    },{
        name: "github",
        type: "input",
        message: "what is this Engineer's github username?"
    }
]).then(({name,github}) => {
    console.log(name, github);
    const engineer = new Engineer(name, github);
    employees.push(engineer);
    console.log(employees);
    askQuestion();
})
}
function addManager(){
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: "what is the name of your Manager?"
    },{
        name: "officeNum",
        type: "input",
        message: "what is your Manager's office number?"
    }
    ]).then(({name,officeNum}) => {
        console.log(name, officeNum);
        const manager = new Manager(name, officeNum);
        employees.push(manager);
        console.log(employees);
        askQuestion();
    })
}
function 

askQuestion();
