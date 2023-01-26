const inquirer = require("inquirer");
const generateHTML = require("./util/generateHTML");
const fs = require('fs')
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { tSExpressionWithTypeArguments } = require("@babel/types");
const employees = [];

function askQuestion(){
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            message: "would you like to add a team member?",
            choices: ["yes", "no"]
        },{
            name: "team-member",
            type: "list",
            message: "what role would you like to add?",
            choices: ["Intern", "Engineer", "Manager"]
        },{
            name:"member-name",
            type:"input",
            message:"what is this team member's name?"
        },{
            name:"school",
            type:"input",
            message: "what school did this Intern go to?",
            when: function(answers){
                answers.team-member === "Intern"
            }
        },{
            name: "github",
            type: "input",
            message: "what is the github username of this Engineer?",
            when: function(answers){
                answers.team-member === "Engineer"
            }
        },{
            name: "officeNumber",
            type: "input",
            message: "what is the offic enumber of this manager?",
        }
    ])
}
