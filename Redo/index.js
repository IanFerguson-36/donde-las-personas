const inquirer = require("inquirer");

firstPrompt();

function firstPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
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
    ])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
