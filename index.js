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
    message: "Input text color (Enter color keyword OR a hexadecimal number):",
  },
  {
    name: "shape",
    type: "list",
    message: "Input shape color (Enter color keyword OR a hexadecimal number):",
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
  if (answers.text.length > 3) {
    console.log("Text must be 3 characters or less");
    init();
  } else {
    // gen logo as svg
    writeToFile("logo.svg", generateLogo(answers));
  }
};

function init() {
  inquirer.prompt(questions).then(handleAnswers);
}

// INITIALIZATION
init();
