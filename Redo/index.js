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
      switch (result.prompt) {
        case "View all employees":
          console.log("fire view all employees function");
          //ask the end question
          break;
        case "View all departments":
          // code block
          console.log("f");
          break;
        case "View all roles":
          console.log(" employees function");
          break;
        case "Add new employee":
          console.log("function");
          break;
        case "Add new department":
          console.log("fire view ");
          break;
        case "Add new role":
          console.log("fire view function");
          break;
        case "Update employee role":
          console.log(" employees ");
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function returnHome() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to make more changes to the directory?",
        name: "restart",
        choices: ["Yes", "No"],
      },
    ])
    .then((result) => {
      if (result.restart === "Yes") firstPrompt();
      if (result.restart === "No") process.exit;
    })
    .catch((err) => {
      console.log(err);
    });
}
