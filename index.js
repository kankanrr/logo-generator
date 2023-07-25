const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./utils/generateLogo.js");

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
    message: "Select shape:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Input shape color (Enter color keyword OR a hexadecimal number):",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

const handleAnswers = (answers) => {
  if (answers.text.length > 3) {
    console.log("Text must be 3 characters or less");
    init();
  } else {
    //gen svg
    writeToFile("logo.svg", generateLogo(answers));
  }
};

function init() {
  inquirer.prompt(questions).then(handleAnswers);
}

// initialization
init();
