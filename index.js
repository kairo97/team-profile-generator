const inquirer = require("inquirer");
const generateHTML = require("./util/generateHTML");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];

function askQuestion() {
  inquirer
    .prompt([
      {
        name: "question",
        type: "list",
        message: "would you like to do?",
        choices: ["add an intern", "add an engineer", "add a manager", "finish building team"]
      }
    ])
    .then((answers) => {
      switch (answers.question) {
        case "add an intern":
          console.log("add Intern");
          addIntern();
          break;

        case "add an engineer":
          console.log("add Engineer");
          addEngineer();
          break;

        case "add a manager":
          console.log("add Manager");
          addManager();
          break;

        case "finish building team":
            console.log("team finished");
            makePage();
        }
    });
}
function addIntern() {
    inquirer.prompt([{
        name: "id",
        message: "what is your Intern's ID number??",
        type: "input"
    },{
        name: "email",
        type: "input",
        message: "what is your intern's email?"
    },{
        name: "name",
        type: "input",
        message: "what is your intern's name?"
    },{
        name: "school",
        type: "input",
        message: "what school did your intern go to?"
    }
]).then(({id, email, name,school}) => {
        console.log(id, email, name, school);
        const intern = new Intern(id, email, name, school);
        team.push(intern)
        console.log(team);
        askQuestion();
    })
}
function addEngineer(){
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "what is your engineer's id number?"
    },{
        name: "email",
        type: "input",
        message: "what is your engineer's email?"
    },{
        name: "name",
        type: "input",
        message: "what is the name of your Engineer?"
    },{
        name: "github",
        type: "input",
        message: "what is this Engineer's github username?"
    }
]).then(({id,email,name,github}) => {
    console.log(id,email,name,github);
    const engineer = new Engineer(id,email,name,github);
    team.push(engineer);
    console.log(team);
    askQuestion();
})
}
function addManager(){
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "what is your manager's ID number?"
    },{
        name:"email",
        type:"input",
        message:"what is your manager's email?"
    },{
        name: "name",
        type: "input",
        message: "what is the name of your Manager?"
    },{
        name: "officeNum",
        type: "input",
        message: "what is your Manager's office number?"
    }
    ]).then(({id,email,name,officeNum}) => {
        console.log(id,email,name,officeNum);
        const manager = new Manager(id,email,name,officeNum);
        team.push(manager);
        console.log(team);
        askQuestion();
    })
}
const makePage = () => {
    fs.writeFile("./dist/index.html", generateHTML(team), (err) =>
    err
    ?console.error(err)
    : console.log("your team has been generated"))
}

askQuestion()
