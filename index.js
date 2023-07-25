const inquirer = require("inquirer");

const fs = require("fs");
const generateLogo = require("./utils/generateLogo.js");

//array of questions for user input
const questions = [
  {
    name: "text",
    type: "input",
    message: "Enter up to three characters for text:",
  },
  {
    name: "textColor",
    type: "input",
    message: "Input text color:",
  },
  {
    name: "shape",
    type: "list",
    message: "Select shape:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Input shape color:",
  },
];

//function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

//function to handleAnswers
const handleAnswers = (answers) => {
  console.log(answers);
  writeToFile("logo.svg", generateLogo(answers));
};

function init() {
  inquirer.prompt(questions).then(handleAnswers);
}
// Function call to initialize app
init();
