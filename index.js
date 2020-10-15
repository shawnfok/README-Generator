const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "Please provide the project name?"
},
{
    type: "input",
    name: "description",
    message: "Please describe what this project does:"
},
{
    type: "input",
    name: "installation",
    message: "How to install this application?"
},
{
    type: "input",
    name: "usage",
    message: "How to use this application?"
},
{
    type: "input",
    name: "contributors",
    message: "Please list the name(s) of the contributors:"
},
{
    type: "checkbox",
    name: "license",
    message: "Which license does this application use?",
    choices: [
        "MIT",
        "GPL",
        "Apache 2.0",
        "BSD",
        "N/A"
    ]   
},
{
    type: "input",
    name: "test",
    message: "How to test this application?"
},
{
    type: "input",
    name: "username",
    message: "Please provide your github username:"
},
{
    type: "input",
    name: "email",
    message: "Please provide your github email adress:"
},
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
          throw err;
        }
        console.log("Successfully created as" + fileName);
      });
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("./README.md", generateMarkdown(data));
    });
}

// function call to initialize program
init();
