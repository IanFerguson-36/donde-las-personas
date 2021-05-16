const mysql = require("mysql");
const inquirer = require("inquirer");

const tracker = [
  {
    type: "input",
    message: "What would you like to do?",
    name: "prompt",
    choices: [
      "View all employees",
      "View all departments",
      "View all roles",
      "Add new employee",
      "Add new department",
      "Add new role",
      "Update employee role",
    ],
  },
];
