const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  user: "root",

  password: "root1234",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});
